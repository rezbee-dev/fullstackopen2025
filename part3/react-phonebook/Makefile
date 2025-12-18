hello:
	echo "Hello, World!"

# deletes dist from backend, builds dist in frontend and moves it to backend
build:
	rm -rf backend/dist && cd frontend && npm run build && mv dist/ ../backend/

start:
	cd backend && npm run start