import emailImg from "../assets/email.png";
import leafImg from "../assets/leaf-disease.png";
import objectImg from "../assets/object-detection.png";
import movieImg from "../assets/movie.png";

export const projects = [
  {
    title: "Spam Email Detection",
    short: "ML-based spam classifier",
    description:
      "Uses NLP preprocessing, vectorization, and ML classifiers to detect spam emails.",
    tech: "Python, NLP, Machine Learning",
    image: emailImg,
    github: "https://github.com/medapoojitha/spam-email",
  },
  {
    title: "Student Performance Prediction",
    short: "Predicts academic performance",
    description:
      "Analyzes academic features using regression and classification models.",
    tech: "Python, ML",
    image: leafImg,
    github: "https://github.com/medapoojitha/student-performance",
  },
  {
    title: "Leaf Disease Detection",
    short: "CNN-based image classifier",
    description:
      "Classifies plant leaf diseases using CNNs for early diagnosis.",
    tech: "Python, CNN, TensorFlow, OpenCV",
    image: leafImg,
    github:
      "https://github.com/medapoojitha/Leaf-Disease-Detection-Using-Image-Processing",
  },
  {
    title: "Object Detection & Visualization",
    short: "Detects objects with bounding boxes",
    description:
      "CNN-based system that detects and visualizes objects in images and videos.",
    tech: "Deep Learning, OpenCV",
    image: objectImg,
    github:
      "https://github.com/medapoojitha/Object-Detection-Visualization-using-CNN",
  },
  {
    title: "Movie Recommendation System",
    short: "Personalized movie suggestions",
    description:
      "Uses collaborative filtering to recommend movies based on user similarity.",
    tech: "Python, Recommendation Systems",
    image: movieImg,
    github:
      "https://github.com/medapoojitha/Movie-Recommendation-System",
  },
];
