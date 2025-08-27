sudo apt-get update
sudo apt-get install -y libvips-dev
# then run the normal build
npm ci
npm run build