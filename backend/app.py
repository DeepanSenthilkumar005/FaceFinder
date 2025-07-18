from flask import Flask, Response
from flask_cors import CORS
import cv2

app = Flask(__name__)
CORS(app)  # Allow CORS so frontend (React or others) can access video stream

# Load OpenCV pre-trained face detector (Haar cascade)
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

# Open the default camera (webcam)
camera = cv2.VideoCapture(0)

if not camera.isOpened():
    raise RuntimeError("Error: Could not open video device. Please check your camera connection.")

def generate_frames():
    while True:
        success, frame = camera.read()
        if not success:
            # Camera frame not read properly, stop the generator or handle error
            print("Warning: Failed to read frame from camera.")
            break

        # Convert to grayscale for face detection
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=4)

        # Draw rectangles around detected faces
        for (x, y, w, h) in faces:
            cv2.rectangle(frame, (x, y), (x+w, y+h), (255, 0, 0), 2)

        # Encode frame to JPEG format
        ret, buffer = cv2.imencode('.jpg', frame)
        if not ret:
            print("Warning: Failed to encode frame.")
            continue  # skip this frame

        frame = buffer.tobytes()

        # Yield frame in multipart format for streaming
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

@app.route('/')
def index():
    return "Face Detection Backend Running"

@app.route('/video')
def video():
    try:
        return Response(generate_frames(),
                        mimetype='multipart/x-mixed-replace; boundary=frame')
    except RuntimeError as e:
        # If something goes wrong in streaming, return an error message
        return f"Video streaming error: {e}"

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=8000)
