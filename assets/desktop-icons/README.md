# Desktop Icons Assets

This folder contains all the desktop application icons for the macOS-style interface.

## Generated Icons (Available)
The following icons have been generated and are ready to use:
- ✅ `this-pc.png` - This PC icon
- ✅ `hp-support.png` - HP Support Assistant icon
- ✅ `edge.png` - Microsoft Edge browser icon
- ✅ `chromium.png` - Chromium browser icon
- ✅ `recycle-bin.png` - Recycle Bin icon
- ✅ `python.png` - Python package icon

## Missing Icons (Need to be added)
The following icons need to be added to complete the desktop:
- ❌ `antigravity.png` - Antigravity app icon (colorful triangular prism)
- ❌ `sql.png` - SQL folder icon (yellow folder)
- ❌ `vscode.png` - Visual Studio Code icon (blue angular brackets)
- ❌ `cpp.png` - C++ folder icon (yellow folder)
- ❌ `brave.png` - Brave browser icon (orange lion)
- ❌ `main-project.png` - Main project folder icon (yellow folder)
- ❌ `chrome.png` - Google Chrome icon (colorful circle)
- ❌ `resume.png` - Resume folder icon (yellow folder with image)
- ❌ `vlc.png` - VLC media player icon (orange traffic cone)
- ❌ `backend.png` - Backend folder icon (yellow folder)
- ❌ `git-bash.png` - Git Bash icon (colorful squares)
- ❌ `macos.png` - macOs folder icon (yellow folder)

## How to Add Missing Icons

You can:
1. Download official icons from the respective applications' websites
2. Use icon packs from sites like:
   - https://icons8.com
   - https://www.flaticon.com
   - https://iconarchive.com
3. Create custom icons using design tools
4. Use SVG icons and convert them to PNG (256x256 recommended)

## JSON Structure

The `desktop-icons.json` file contains an array of objects with the following structure:

```json
{
  "id": "unique-identifier",
  "name": "Display Name",
  "icon": "/assets/desktop-icons/icon-name.png",
  "type": "system|application|browser|folder",
  "action": "open-file-explorer|launch-app|launch-browser|open-folder|launch-terminal",
  "path": "optional-folder-path",
  "url": "optional-url",
  "executable": "optional-executable-name"
}
```

## Usage

Import the JSON file in your React component:

```javascript
import desktopIconsData from '/assets/desktop-icons.json';

// Use in your component
const icons = desktopIconsData.desktopIcons;
```
