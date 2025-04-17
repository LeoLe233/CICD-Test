# Simple Node.js Application

A simple Node.js application with one endpoint that returns a "Hello World" message and timestamp in JSON format.

## Features

- Express.js REST API
- Docker containerization
- CI/CD with GitHub Actions
- Automated tests

## Prerequisites

- Node.js 18+ (for local development)
- Docker (for containerization)
- GitHub account (for CI/CD)

## Local Development

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/simple-node-app.git
   cd simple-node-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the application:
   ```
   npm start
   ```

4. The API will be available at http://localhost:3000

## Running with Docker

1. Build the Docker image:
   ```
   docker build -t simple-node-app .
   ```

2. Run the container:
   ```
   docker run -p 3000:3000 simple-node-app
   ```

3. Alternatively, use Docker Compose:
   ```
   docker-compose up
   ```

## Testing

Run tests with:
```
npm test
```

## Deployment

The application is set up for automatic deployment using GitHub Actions. When you push to the main branch, the following happens:

1. Tests are run
2. A Docker image is built and pushed to Docker Hub
3. The image is deployed to your remote server

### Required GitHub Secrets

For the GitHub Actions workflow to function, you need to set up these secrets in your GitHub repository:

- `DOCKERHUB_USERNAME`: Your Docker Hub username
- `DOCKERHUB_TOKEN`: Your Docker Hub access token
- `SERVER_HOST`: Your server's hostname or IP
- `SERVER_USERNAME`: SSH username for the server
- `SERVER_SSH_KEY`: SSH private key for authentication

## API Endpoints

- `GET /`: Returns a JSON object with a message and current timestamp

Example response:
```json
{
  "message": "Hello World!",
  "timestamp": "2023-09-14T12:34:56.789Z"
}
``` 