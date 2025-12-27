# Automatic Garbage Segregation using Image Processing and Machine Learning

<div style="text-align: center; margin: 2rem 0;">
  <p style="font-size: 1.1rem; color: var(--vp-c-text-2);">
    Automated waste segregation system using tiny-YOLOv3 for real-time classification and robotic arm for physical sorting
  </p>
</div>

## Overview

This research project presents an automated waste segregation system that uses machine learning and image processing to classify and segregate different types of recyclable waste. The system employs tiny-YOLOv3 (You Only Look Once version 3) for real-time object detection and a robotic arm for automated physical sorting. The model can identify and classify waste into five categories: Wood, Metal, Paper, Plastic, and Glass.

## Key Achievements

- ✅ **61.47% mAP** (mean Average Precision) on waste classification
- ✅ **0.65 Precision** and **0.52 Recall** on validation set
- ✅ **49.49% IOU** (Intersection over Union) for object detection
- ✅ **Real-time detection** (3-300 milliseconds depending on object count)
- ✅ **Secured funding** from Karnataka State Council for Science and Technology (KSCST)
- ✅ **Published research paper** at JSS Academy of Technical Education

## Research Team

**Authors**: Dr. Naveen N C, Jyothsna P, Cauvery A, **Bhargav Hegde**, Akshitha Y V  
**Institution**: JSS Academy of Technical Education, Bengaluru  
**Affiliation**: Visvesvaraya Technological University, Belagavi, Karnataka, India  
**Sponsorship**: Karnataka State Council for Science and Technology (KSCST) - Student Project 43rd Series 2019-2020

## Technologies

- **Object Detection**:** tiny-YOLOv3 (25-layer neural network)  
- **Deep Learning**: Convolutional Neural Network (CNN)  
- **Hardware**: Raspberry Pi Model 3, Pi Camera, Robotic Arm  
- **Languages**: Python  
- **Framework**: YOLO (You Only Look Once) v3

## System Architecture

### Software Component

The system uses a **tiny-YOLOv3** based neural network trained on over **10,000 images** of different waste types. The model architecture consists of:

1. **Image Capture**: Pi Camera captures images of waste in the workspace
2. **Object Detection**: tiny-YOLOv3 identifies waste objects and their locations
3. **Classification**: CNN classifies objects into 5 categories (Wood, Metal, Paper, Plastic, Glass)
4. **Coordinate Extraction**: System extracts coordinates of detected objects
5. **Robotic Control**: Coordinates are sent to Raspberry Pi for robotic arm control

### Hardware Component

- **Raspberry Pi Model 3**: Loads the pre-trained model and controls the system
- **Pi Camera**: Captures images of the workspace
- **Robotic Arm**: Physically segregates waste into appropriate bins based on classification

## Training & Performance

### Training Details

- **Dataset**: 10,000+ images across 5 waste categories
- **Training Iterations**: 10,000 iterations
- **Weights Update**: Every 1,000 iterations
- **Best Model**: Weights after 9,000 iterations (highest mAP and IOU)
- **Network**: tiny-YOLOv3 (25 layers, optimized for embedded systems)

### Performance Metrics

| Metric | Value |
|-------|-------|
| **Mean Average Precision (mAP)** | 61.47% |
| **Precision** | 0.65 |
| **Recall** | 0.52 |
| **Intersection over Union (IOU)** | 49.49% |
| **Detection Time** | 3-300 ms (depending on object count and GPU availability) |

### Advantages of tiny-YOLOv3

- **Real-time Processing**: Processes images at 30 FPS on Pascal Titan X
- **Single Network Evaluation**: Faster than R-CNN (1000x) and Fast R-CNN (100x)
- **Global Context**: Looks at entire image for better predictions
- **Embedded Deployment**: Optimized for Raspberry Pi deployment

## System Workflow

1. **Image Capture**: Pi Camera captures image of waste in workspace
2. **Image Analysis**: Pre-trained tiny-YOLOv3 model analyzes the image
3. **Object Detection**: Model detects waste objects and their locations (bounding boxes)
4. **Classification**: Each detected object is classified into one of 5 categories
5. **Coordinate Transmission**: Object coordinates are sent to Raspberry Pi
6. **Robotic Segregation**: Robotic arm picks up objects and places them in appropriate bins
7. **Queue Processing**: Multiple objects are queued and processed sequentially

## Waste Categories

The system can classify waste into the following categories:

- 🌳 **Wood**: Wooden items and materials
- 🔩 **Metal**: Metallic waste items
- 📄 **Paper**: Paper and cardboard products
- 🥤 **Plastic**: Plastic containers and materials
- 🍷 **Glass**: Glass bottles and containers

## Key Features

- **Real-time Detection**: Processes images in 3-300 milliseconds
- **Multi-object Detection**: Can detect and classify multiple waste items simultaneously
- **Automated Sorting**: Robotic arm automatically segregates waste without human intervention
- **Embedded Deployment**: Runs efficiently on Raspberry Pi (low-power, cost-effective)
- **Pre-trained Model**: Uses optimized weights for fast inference
- **Coordinate-based Sorting**: Precise robotic arm control using detected coordinates

## Research Contributions

### Problem Statement

- India generates **0.1 million tons of waste daily**, with only **5% being recycled**
- Manual segregation is time-consuming and requires extensive workforce
- Improper waste disposal causes environmental hazards and climate change
- Need for automated, efficient waste segregation at source

### Solution Approach

- **Automated Classification**: Machine learning eliminates need for manual sorting
- **Real-time Processing**: Fast detection enables practical deployment
- **Scalable Design**: Can be implemented at household and industrial levels
- **Cost-effective**: Uses affordable hardware (Raspberry Pi)

## Limitations & Future Work

### Current Limitations

- **Transparent Objects**: Difficulty detecting transparent objects on light backgrounds
- **Object Size**: Limited to lightweight, relatively small objects (robotic arm constraint)
- **Workspace Size**: Limited by robotic arm reach

### Future Improvements

1. **Full YOLOv3**: Upgrade to 74-layer YOLOv3 for better accuracy (requires more GPU/memory)
2. **Real-time Dataset Creation**: Add feature to learn from new objects automatically
3. **Conveyor Belt Integration**: Implement with conveyor belt for continuous processing
4. **Scalability**: Deploy at both household and industrial waste segregation centers
5. **Enhanced Hardware**: Use more capable robotic arm for larger objects

## Applications

- 🏠 **Household Level**: Automated waste segregation at home
- 🏭 **Waste Management Facilities**: Large-scale sorting in recycling centers
- 🏢 **Commercial Buildings**: Office and commercial waste management
- 🌆 **Smart Cities**: Automated segregation at collection points
- ♻️ **Recycling Centers**: Efficient sorting for maximum recyclability

## Demo Video

<div style="margin: 2rem 0; text-align: center;">
  <video 
    controls 
    style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
    preload="metadata">
    <source src="/videos/garbage-segregation-demo.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

## Project Documentation

📄 [Download Research Paper (PDF)](/pdfs/garbage-segregation-paper.pdf) - *"Automatic Garbage Segregation using Image Processing and Machine Learning" - Published Paper*

## Recognition

- **KSCST Funding**: Selected and sponsored by Karnataka State Council for Science and Technology, Student Project 43rd Series 2019-2020
- **Institutional Support**: Sponsored and supported by JSS Academy of Technical Education, Bengaluru
- **Research Publication**: Technical paper published with detailed methodology and results

## Related Projects

- [Laser Shooter Using Object Detection](/projects/laser-shooter)
- [All Projects](/projects)

---

**Note**: This project demonstrates the practical application of deep learning and computer vision in solving real-world environmental challenges through automation and intelligent systems.
