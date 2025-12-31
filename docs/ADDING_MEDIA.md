# Guide: Adding Videos, PDFs, and Presentations

This guide explains how to add videos, PDFs, PowerPoint presentations, and other media files to your portfolio projects.

## File Structure

All media files should be placed in the `docs/public/` directory:

```
docs/
└── public/
    ├── videos/          # Video files (.mp4, .webm, etc.)
    └── pdfs/            # PDFs and PowerPoint files (.pdf, .pptx, etc.)
```

## Adding Videos

### Step 1: Copy Your Video File

Copy your video file to `docs/public/videos/` with a descriptive name:

```bash
# Example: Copy a video file
cp "/path/to/your/video.mp4" "docs/public/videos/project-name-demo.mp4"
```

**Recommended naming**: `project-name-demo.mp4` or `project-name-feature.mp4`

### Step 2: Add Video to Project Page

In your project markdown file (e.g., `docs/projects/your-project.md`), add:

```markdown
## Demo Video

<div style="margin: 2rem 0; text-align: center;">
  <video 
    controls 
    style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
    preload="metadata">
    <source src="/videos/your-video-filename.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>
```

**Note**: The path starts with `/videos/` (not `/public/videos/`) because VitePress serves files from `public/` at the root.

### Video Attributes

- `controls`: Shows play/pause, volume, and fullscreen controls
- `preload="metadata"`: Loads video metadata but not the entire video (faster page load)
- `style`: Custom styling for the video player

## Adding PDFs and PowerPoint Files

### Step 1: Copy Your File

Copy your PDF or PPTX file to `docs/public/pdfs/`:

```bash
# Example: Copy a PDF
cp "/path/to/your/document.pdf" "docs/public/pdfs/project-name-report.pdf"

# Example: Copy a PowerPoint
cp "/path/to/your/presentation.pptx" "docs/public/pdfs/project-name-presentation.pptx"
```

### Step 2: Add Download Link

In your project markdown file, add a download link:

```markdown
## Project Documentation

📄 [Download Project Report (PDF)](/pdfs/your-filename.pdf) - *Description of the document*

📊 [Download Presentation (PPTX)](/pdfs/your-presentation.pptx) - *Description of the presentation*
```

## Examples

### Example 1: Adding a Demo Video

```markdown
### Demo Video

<div style="margin: 2rem 0; text-align: center;">
  <video 
    controls 
    style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
    preload="metadata">
    <source src="/videos/my-project-demo.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>
```

### Example 2: Adding Multiple Documents

```markdown
## Project Resources

📄 [Download Technical Report (PDF)](/pdfs/project-report.pdf) - *Full technical documentation*

📊 [Download Presentation (PPTX)](/pdfs/project-presentation.pptx) - *Project presentation slides*

📋 [Download Code Documentation (PDF)](/pdfs/code-docs.pdf) - *API and code documentation*
```

## File Size Considerations

### Videos
- **Recommended**: Keep videos under 50MB for faster loading
- **Format**: Use MP4 (H.264) for best browser compatibility
- **Compression**: Consider compressing large videos before uploading

### PDFs and PPTs
- **Recommended**: Keep files under 10MB
- **Optimization**: Compress PDFs if they're very large

## Testing Locally

After adding files:

1. **Build locally** to test:
   ```bash
   npm run build
   npm run serve
   ```

2. **Check file paths**: Make sure all paths start with `/videos/` or `/pdfs/` (not `/public/`)

3. **Test video playback**: Click the video to ensure it plays correctly

4. **Test downloads**: Click download links to verify files download correctly

## Troubleshooting

### Video Not Playing
- Check file path is correct (should start with `/videos/`)
- Verify file format is MP4
- Check browser console for errors
- Ensure file was copied to `docs/public/videos/`

### PDF Not Downloading
- Check file path is correct (should start with `/pdfs/`)
- Verify file exists in `docs/public/pdfs/`
- Check file permissions

### Files Not Showing After Deployment
- Make sure files are committed to git
- Verify files are in `docs/public/` directory
- Check GitHub Actions build logs for errors

## Current Files Structure

```
docs/public/
├── videos/
│   ├── garbage-segregation-demo.mp4
│   └── laser-shooter-demo.mp4
└── pdfs/
    ├── garbage-segregation-paper.pdf
    ├── smart-kitchen-containers.pdf
    ├── laser-shooter.pptx
    └── seed-classification.pptx
```

## Quick Reference

| File Type | Location | URL Path | Example |
|-----------|----------|----------|---------|
| Video | `docs/public/videos/` | `/videos/filename.mp4` | `/videos/demo.mp4` |
| PDF | `docs/public/pdfs/` | `/pdfs/filename.pdf` | `/pdfs/report.pdf` |
| PPTX | `docs/public/pdfs/` | `/pdfs/filename.pptx` | `/pdfs/presentation.pptx` |

---

**Note**: After adding files, remember to commit and push to GitHub:
```bash
git add docs/public/
git commit -m "Add media files for project"
git push origin main
```



