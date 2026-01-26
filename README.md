# Version Control System Project

A full-stack Git-like version control system built with Node.js and React. This project provides a modern interface for managing repositories, handling version control operations, and collaborating with other developers.

---

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Getting Started](#-getting-started)
- [API Endpoints](#-api-endpoints)
- [Available Commands](#-available-commands)
- [Usage](#-usage)
- [Contributing](#-contributing)
- [License](#-license)

---

## 📖 Project Overview

This Version Control System Project is a comprehensive implementation of Git-like functionality with a modern web interface. It allows users to:

- Initialize and manage Git repositories
- Perform version control operations (add, commit, push, pull, revert)
- Manage user accounts and authentication
- Create and manage repositories
- Track and manage issues
- Collaborate in real-time using WebSockets

The project is divided into two main components:
- **Backend**: Express.js REST API with MongoDB database
- **Frontend**: React application with Vite build tool

---

## ✨ Features

### Backend Features
- 🔐 User authentication and authorization (JWT-based)
- 📦 Repository management (CRUD operations)
- 🔄 Git-like operations:
  - `init` - Initialize a new repository
  - `add` - Stage files for commit
  - `commit` - Create a commit with changes
  - `push` - Push commits to remote
  - `pull` - Pull changes from remote
  - `revert` - Revert to previous commits
- 👤 User profile management
- 🐛 Issue tracking and management
- 💾 AWS S3 integration for file storage
- 🔌 Real-time communication with Socket.IO

### Frontend Features
- 🎨 Responsive user interface with React
- 🔐 Authentication system with login/signup
- 📊 Dashboard for repository overview
- 👤 User profile management
- 📱 Mobile-friendly design
- ⚡ Fast development with Vite

---

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js v5.2.1
- **Database**: MongoDB with Mongoose ODM v9.1.5
- **Authentication**: JWT (jsonwebtoken v9.0.3)
- **Password Hashing**: bcryptjs v3.0.3
- **Real-time**: Socket.IO v4.8.3
- **File Storage**: AWS SDK v2.1693.0
- **CLI Tool**: yargs v18.0.0
- **Others**: dotenv, cors, body-parser

### Frontend
- **Library**: React v19.2.0
- **Build Tool**: Vite v7.2.4
- **Package Manager**: npm/yarn
- **Linting**: ESLint v9.39.1

---

## 📁 Project Structure

```
VERSION-CONTROL-SYSTEM-PROJECT/
├── Backend/
│   ├── config/
│   │   └── aws-config.js          # AWS S3 configuration
│   ├── controllers/
│   │   ├── init.js                # Initialize repository
│   │   ├── add.js                 # Stage files
│   │   ├── commit.js              # Create commits
│   │   ├── push.js                # Push changes
│   │   ├── pull.js                # Pull changes
│   │   ├── revert.js              # Revert commits
│   │   ├── userController.js      # User management
│   │   ├── repoController.js      # Repository management
│   │   └── issueController.js     # Issue management
│   ├── middleware/
│   │   ├── authMiddleware         # Authentication checks
│   │   └── authorizeMiddleware    # Authorization checks
│   ├── models/
│   │   ├── userModel.js           # User schema
│   │   ├── repoModel.js           # Repository schema
│   │   └── issueModel.js          # Issue schema
│   ├── routes/
│   │   ├── main.router.js         # Main routes
│   │   ├── user.router.js         # User routes
│   │   ├── repo.router.js         # Repository routes
│   │   └── issue.router.js        # Issue routes
│   ├── .myGit/                    # Local repository storage
│   │   ├── config.json
│   │   ├── commits/               # Commit objects
│   │   └── staging/               # Staging area
│   ├── .env                       # Environment variables
│   ├── index.js                   # Entry point
│   └── package.json               # Dependencies
│
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Auth/
│   │   │   │   ├── Login.jsx      # Login component
│   │   │   │   └── Sighup.jsx     # Signup component
│   │   │   ├── dashboard/
│   │   │   │   └── Dashboard.jsx  # Dashboard component
│   │   │   └── user/
│   │   │       └── Profile.jsx    # User profile component
│   │   ├── assets/                # Static assets
│   │   ├── App.jsx                # Main app component
│   │   ├── authContext.jsx        # Authentication context
│   │   ├── App.css                # App styles
│   │   ├── index.css              # Global styles
│   │   └── main.jsx               # React entry point
│   ├── public/                    # Public assets
│   ├── vite.config.js             # Vite configuration
│   ├── eslint.config.js           # ESLint configuration
│   ├── index.html                 # HTML template
│   └── package.json               # Dependencies
│
├── .gitignore                     # Git ignore rules
└── README.md                      # This file
```

---

## 🚀 Installation

### Prerequisites
- **Node.js** v16 or higher
- **npm** or **yarn** package manager
- **MongoDB** instance (local or cloud)
- **AWS Account** (for S3 storage - optional)

### Backend Setup

1. Navigate to the backend directory:
```bash
cd Backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the Backend directory:
```env
MONGODB_URI=mongodb://localhost:27017/version-control-system
JWT_SECRET=your_jwt_secret_key_here
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=us-east-1
AWS_S3_BUCKET=your_bucket_name
PORT=5000
```

4. Start the backend server:
```bash
npm start
```

The server will start on `http://localhost:5000` by default.

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in terminal).

---

## ⚙️ Configuration

### Environment Variables (Backend)

Create a `.env` file in the Backend directory with the following variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/vcs` |
| `JWT_SECRET` | Secret key for JWT tokens | `your_secret_key_123` |
| `PORT` | Server port | `5000` |
| `AWS_ACCESS_KEY_ID` | AWS access key | `AKIA...` |
| `AWS_SECRET_ACCESS_KEY` | AWS secret key | `aws_secret_...` |
| `AWS_REGION` | AWS region | `us-east-1` |
| `AWS_S3_BUCKET` | S3 bucket name | `my-vcs-bucket` |

### MongoDB Setup

If using MongoDB Atlas:
1. Create a cluster at [mongodb.com](https://mongodb.com)
2. Get your connection string
3. Add it to the `MONGODB_URI` in `.env`

---

## 🎯 Getting Started

### Quick Start

1. **Backend**:
   ```bash
   cd Backend
   npm install
   npm start
   ```

2. **Frontend** (in a new terminal):
   ```bash
   cd Frontend
   npm install
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

4. **Sign up** for a new account or **log in** with existing credentials

5. Create a repository and start using version control features!

---

## 📡 API Endpoints

### Authentication Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/signup` | Register a new user |
| `POST` | `/api/auth/login` | Login user |
| `GET` | `/api/auth/profile` | Get user profile (auth required) |

### Repository Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/repo/init` | Initialize a new repository |
| `GET` | `/api/repo/list` | List all repositories |
| `GET` | `/api/repo/:id` | Get repository details |
| `DELETE` | `/api/repo/:id` | Delete repository |

### Version Control Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/repo/:id/add` | Stage files |
| `POST` | `/api/repo/:id/commit` | Create a commit |
| `POST` | `/api/repo/:id/push` | Push commits |
| `POST` | `/api/repo/:id/pull` | Pull changes |
| `POST` | `/api/repo/:id/revert` | Revert to previous commit |

### Issue Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/issues` | Create an issue |
| `GET` | `/api/issues` | List issues |
| `GET` | `/api/issues/:id` | Get issue details |
| `PUT` | `/api/issues/:id` | Update issue |
| `DELETE` | `/api/issues/:id` | Delete issue |

---

## 💻 Available Commands

### Backend Commands

```bash
# Start the server
npm start

# Initialize a repository
node index.js init --repo-name=myrepo

# Add files to staging
node index.js add --file=path/to/file

# Create a commit
node index.js commit --message="Initial commit"

# Push changes
node index.js push

# Pull changes
node index.js pull

# Revert to a previous commit
node index.js revert --commit-id=<commit-id>
```

### Frontend Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run ESLint
npm run lint

# Preview production build
npm run preview
```

---

## 🔧 Usage

### Creating a Repository

1. Log in to the application
2. Click on "Create Repository"
3. Enter repository name and description
4. Click "Initialize"

### Making Changes and Committing

1. Navigate to your repository
2. Upload or add files
3. Click "Add Files" to stage them
4. Enter commit message
5. Click "Commit"
6. Click "Push" to sync to remote

### Pulling Latest Changes

1. Go to your repository
2. Click "Pull" to fetch latest changes from remote

### Reverting Changes

1. View commit history
2. Select the commit to revert to
3. Click "Revert"
4. Confirm the reversion

---

## 🤝 Contributing

We welcome contributions! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Standards

- Follow ESLint rules
- Write meaningful commit messages
- Add comments for complex logic
- Test your changes before submitting PR

---

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

## 👨‍💻 Author

**Naveen Singh**

---

## 🆘 Troubleshooting

### Backend won't start
- Check if MongoDB is running
- Verify `.env` file is correctly configured
- Check if port 5000 is not in use

### Frontend won't connect to backend
- Ensure backend is running on correct port
- Check CORS configuration
- Verify network connectivity

### Socket.IO connection issues
- Check if backend is running
- Verify WebSocket is not blocked by firewall
- Check browser console for errors

---

## 📞 Support

For issues and questions:
- Open an issue on GitHub
- Contact the development team
- Check existing documentation

---

## 🚀 Future Enhancements

- [ ] Branch management
- [ ] Merge conflict resolution UI
- [ ] Collaboration features
- [ ] Issue tracking enhancements
- [ ] Webhooks integration
- [ ] Advanced analytics
- [ ] CLI tool distribution

---

**Last Updated**: January 2026

**Version**: 1.0.0
