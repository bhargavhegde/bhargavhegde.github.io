# Laser Shooter Using Object Detection

<div style="text-align: center; margin: 2rem 0;">
  <p style="font-size: 1.1rem; color: var(--vp-c-text-2);">
    Real-time object tracking prototype with automated laser targeting using computer vision
  </p>
</div>

## Overview

The Laser Shooter is an innovative computer vision project that combines real-time object detection with precise servo motor control. The system tracks objects in real-time and automatically aims a laser pointer at the detected targets, demonstrating the integration of computer vision with physical control systems.

## Key Features

- 🎯 **Real-time Object Tracking**: Continuous tracking of moving objects
- 🔴 **Automated Laser Targeting**: Precise servo motor control for laser aiming
- 📷 **Computer Vision**: OpenCV-based object detection and tracking
- 🤖 **Robotic Integration**: Seamless integration of vision and control systems

## Technologies

- **Computer Vision**: OpenCV
- **Hardware**: Raspberry Pi, Servo Motors, Laser Module
- **Languages**: Python
- **Control Systems**: Servo motor control, PWM signals

## Features

- **Object Detection**: Real-time detection of objects in camera feed
- **Target Tracking**: Continuous tracking of moving objects
- **Servo Control**: Precise servo motor positioning for laser aiming
- **Real-time Processing**: Low-latency vision and control pipeline
- **Raspberry Pi Deployment**: Edge computing for standalone operation

## Project Details

### Architecture

The system integrates:
1. **Vision Pipeline**: Camera captures video feed
2. **Object Detection**: OpenCV detects and tracks objects
3. **Coordinate Calculation**: Converts image coordinates to servo angles
4. **Servo Control**: PWM signals control servo motors for precise aiming
5. **Laser Control**: Laser module activation synchronized with targeting

### Technical Implementation

- **Object Detection**: OpenCV-based detection algorithms
- **Tracking Algorithm**: Continuous object tracking across frames
- **Coordinate Transformation**: Image space to servo angle conversion
- **Control Loop**: Real-time feedback control for accurate targeting

## Use Cases

- 🎯 **Educational Projects**: Demonstrating computer vision and robotics integration
- 🔬 **Research**: Object tracking and control system research
- 🎮 **Interactive Systems**: Gaming and interactive applications
- 🤖 **Robotics**: Foundation for more complex robotic vision systems

## Demo & Screenshots

### Demo Video

<div style="margin: 2rem 0; text-align: center;">
  <video 
    controls 
    style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
    poster=""
    preload="metadata">
    <source src="/videos/laser-shooter-demo.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

### Project Presentation

📊 [Download Project Presentation (PPTX)](/pdfs/laser-shooter.pptx) - *Laser Shooter Presentation*

---

## Related Projects

- [Garbage Segregation System](/projects/garbage-segregation)
- [All Projects](/projects)

