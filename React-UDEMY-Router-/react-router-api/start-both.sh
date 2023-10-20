#!/bin/bash

# Navigate to the backend directory and start it
cd backend && npm start &

# Sleep for a couple of seconds to allow the above command to execute fully
sleep 2




# Navigate to the frontend directory and start it

cd frontend && npm start &
