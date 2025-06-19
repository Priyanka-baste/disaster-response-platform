import React, { useEffect } from 'react';
import { io } from 'socket.io-client';

export default function WebSocketListener() {
  useEffect(() => {
    const socket = io('http://localhost:5000');

    socket.on('disaster_updated', data => {
      console.log('🔄 Disaster updated:', data);
    });

    socket.on('resources_updated', data => {
      console.log('📍 Resources updated:', data);
    });

    socket.on('social_media_updated', data => {
      console.log('📢 Social Media Update:', data);
    });

    return () => socket.disconnect();
  }, []);

  return null;
}
