# DAIR-V2X Cooperative 3D Object Detection

<div style="text-align: center; margin: 2rem 0;">
  <p style="font-size: 1.1rem; color: var(--vp-c-text-2);">
    Full reproduction of DAIR-V2X late-fusion model for cooperative 3D object detection in V2X scenarios
  </p>
</div>

## Overview

This project is a complete reproduction of the DAIR-V2X cooperative 3D object detection system, focusing on Vehicle-to-Everything (V2X) communication scenarios. The system uses late-fusion techniques to combine LiDAR point cloud data from multiple vehicles for improved perception accuracy.

## Key Achievements

- ✅ **40.01% AP** on vehicle class detection
- ✅ **37.25% 3D AP@0.7** (8.9% gain over original implementation)
- ✅ **50.51% BEV AP@0.7** (6.7% gain over original)
- ✅ **12.3% reduction** in communication cost (898.10 bytes)

## Technologies

- **Languages**: Python, Shell
- **Frameworks**: PyTorch
- **Hardware**: NVIDIA RTX 3080 Ti
- **OS**: Ubuntu
- **Tools**: Conda, CUDA

## Features

- **LiDAR-based point cloud processing** with visualization tools
- **3D and BEV (Bird's Eye View) fusion results** visualization
- **Late-fusion architecture** for cooperative perception
- **Optimized communication** protocols for V2X scenarios
- **Comprehensive evaluation metrics** (3D AP, BEV AP)

## Project Details

### Architecture

The system implements a late-fusion approach where:
1. Individual vehicles process their local LiDAR data
2. Features are extracted and compressed for transmission
3. Features from multiple vehicles are fused at a central node
4. Final 3D object detection is performed on the fused features

### Performance Improvements

The reproduction achieved significant improvements over the original implementation:
- **3D AP@0.7**: Improved from 34.2% to 37.25% (+8.9%)
- **BEV AP@0.7**: Improved from 47.3% to 50.51% (+6.7%)
- **Communication Cost**: Reduced by 12.3% to 898.10 bytes

### Visualization Tools

The project includes comprehensive visualization tools for:
- 3D point cloud rendering
- Bird's Eye View (BEV) projections
- Fusion result visualization
- Detection bounding boxes and confidence scores

## Repository

🔗 **GitHub**: [DAIR-V2X-Bhargav-2025](https://github.com/bhargavhegde/DAIR-V2X-Bhargav-2025)

## Demo & Screenshots

*Add your demo videos, screenshots, and visualizations here*

---

## Related Projects

- [Autonomous Vehicle 3D Perception System](/projects/av-perception)
- [All Projects](/projects)

