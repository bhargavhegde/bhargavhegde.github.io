# Low-Latency Sound Disambiguator

<div style="text-align: center; margin: 2rem 0;">
  <p style="font-size: 1.1rem; color: var(--vp-c-text-2);">
    Real-time sound alert and direction detection system for accessibility
  </p>
</div>

## Overview

The Low-Latency Sound Disambiguator is an accessibility-focused system that detects and classifies sounds in real-time while estimating their direction of origin. It's designed for low-latency processing with live microphone input, making it suitable for assistive technology applications.

## Key Features

- 🔊 **Real-time Sound Classification** - Detects sounds like sirens, barks, alarms, etc.
- 📍 **Direction Estimation** - Uses TDOA (Time Difference of Arrival) for direction detection
- 🎤 **Live Microphone Input** - Processes audio in real-time
- 🤖 **AI-Generated Summaries** - Uses Ollama + Mistral for intelligent sound descriptions
- 📊 **Visual Alerts** - Web UI with visual indicators and confidence trends
- 🧭 **Polar Compass** - Visual direction indicator
- ⚡ **Low-Latency Processing** - Optimized for real-time performance

## Technologies

- **Sound Classification**: YAMNet (TensorFlow)
- **Direction Estimation**: TDOA algorithm
- **AI Summaries**: Ollama + Mistral
- **Processing**: NumPy, SciPy
- **UI**: Streamlit
- **Language**: Python

## How It Works

1. **Audio Capture**: Live microphone input is captured
2. **Sound Classification**: YAMNet classifies the sound type (siren, bark, alarm, etc.)
3. **Direction Estimation**: TDOA algorithm calculates the direction using stereo audio
4. **AI Summarization**: Ollama + Mistral generates intelligent descriptions
5. **Visualization**: Results are displayed with:
   - Visual alerts
   - Confidence trends
   - Polar compass showing direction
   - Sound type labels

## Use Cases

- ♿ **Accessibility**: Assist users with hearing impairments
- 🚨 **Safety Alerts**: Detect emergency sounds (sirens, alarms)
- 🐕 **Pet Monitoring**: Detect and locate pet sounds
- 🏠 **Smart Home**: Sound-based automation triggers
- 🎯 **Security**: Intrusion detection through sound analysis

## Technical Details

### Sound Classification
- Uses pre-trained YAMNet model for 521 audio event classes
- Real-time inference with minimal latency
- Confidence scoring for each detection

### Direction Estimation
- TDOA (Time Difference of Arrival) algorithm
- Supports simulated stereo audio
- Polar coordinate system for direction representation

### AI Integration
- Ollama for local LLM inference
- Mistral model for natural language summaries
- Context-aware sound descriptions

## Repository

🔗 **GitHub**: [Low-latency-Sound-Disambiguator](https://github.com/bhargavhegde/Low-latency-Sound-Disambiguator)

## Demo & Screenshots

*Add your demo videos, screenshots, and visualizations here*

---

## Related Projects

- [RAG-KnowBot](/projects/rag-knowbot)
- [All Projects](/projects)

