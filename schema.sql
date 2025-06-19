
-- Table: disasters
create table if not exists disasters (
    id uuid primary key default gen_random_uuid(),
    title text not null,
    location_name text,
    location geography(Point, 4326),
    description text,
    tags text[],
    owner_id text not null,
    created_at timestamptz default now(),
    audit_trail jsonb
);

-- Table: reports
create table if not exists reports (
    id uuid primary key default gen_random_uuid(),
    disaster_id uuid references disasters(id),
    user_id text,
    content text,
    image_url text,
    verification_status text default 'pending',
    created_at timestamptz default now()
);

-- Table: resources
create table if not exists resources (
    id uuid primary key default gen_random_uuid(),
    disaster_id uuid references disasters(id),
    name text,
    location_name text,
    location geography(Point, 4326),
    type text,
    created_at timestamptz default now()
);

-- Table: cache
create table if not exists cache (
    key text primary key,
    value jsonb,
    expires_at timestamptz
);

-- Geospatial Indexes
create index if not exists disasters_location_idx on disasters using gist (location);
create index if not exists resources_location_idx on resources using gist (location);

-- Text Search Indexes
create index if not exists disasters_tags_idx on disasters using gin (tags);
create index if not exists disasters_owner_idx on disasters (owner_id);

-- Supabase RPC Function: find_nearby_resources
create or replace function find_nearby_resources(lat float, lon float, radius int)
returns setof resources as $$
begin
  return query
  select * from resources
  where ST_DWithin(
    resources.location,
    ST_SetSRID(ST_MakePoint(lon, lat), 4326),
    radius
  );
end;
$$ language plpgsql;
