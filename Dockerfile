# Get the Playwright version from package.json or use a compatible one
FROM mcr.microsoft.com/playwright:v1.41.1-jammy

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the application (optional, but ensures build validity)
RUN npm run build

# Run Playwright tests
# We use --ipc=host in the docker run command, but here we just define the entrypoint
CMD ["npx", "playwright", "test"]
