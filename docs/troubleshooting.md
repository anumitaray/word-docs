---
sidebar_position: 4
title: Troubleshooting
slug: /troubleshooting
---

# Microsoft Word: Troubleshooting Guide

This diagnostic guide helps resolve common technical problems in Microsoft Word, including crashes, document recovery, corrupt formatting, cloud sync errors, and printing defects.

---

## 1. Document Recovery & File Corruption

### Recovering Unsaved Documents
If Word closed unexpectedly due to a power outage or system reboot:
1. Re-open Word. The **Document Recovery** pane automatically appears on the left side with timestamped auto-saved versions.
2. If the pane does not appear, go to **File** > **Info** > **Manage Document** > **Recover Unsaved Documents**.
3. Browse the AutoRecover directory:
   - **Windows**: `%AppData%\Microsoft\Word\` or `%LocalAppData%\Microsoft\Office\UnsavedFiles`
   - **macOS**: `~/Library/Containers/com.microsoft.Word/Data/Library/Preferences/AutoRecovery`
4. Look for files with extension `.asd` and open them in Word.

### The "Open and Repair" Tool
When encountering "Word experienced an error trying to open the file" or XML schema parsing errors:
1. Open Microsoft Word (blank window).
2. Go to **File** > **Open** > **Browse**.
3. Single-click the corrupted `.docx` file.
4. Click the small arrow on the right side of the **Open** button and select **Open and Repair**.

### Emergency Text Extraction via ZIP Unpack
Modern `.docx` files are compressed ZIP archives containing XML trees. To extract raw text from an unopenable document:
1. Rename `document.docx` to `document.zip`.
2. Extract the ZIP archive using Explorer, 7-Zip, or Terminal:
   ```bash
   tar -xf document.zip -C extracted/
   ```
3. Open `extracted/word/document.xml` in any text editor to retrieve all paragraphs and textual contents.

---

## 2. Application Crashes & Safe Mode Diagnostics

### Launching Word in Safe Mode
Safe Mode bypasses add-ins, custom templates, and hardware graphics acceleration:
- **Windows**: Press `Win + R`, type:
  ```text
  winword /safe
  ```
  and press Enter. Alternatively, hold the `Ctrl` key while clicking the Word desktop icon.
- **macOS**: Hold the `Shift` key while starting Microsoft Word.

### Disabling Problematic Add-ins
If Word functions normally in Safe Mode, a COM or Office Add-in is the root cause:
1. Go to **File** > **Options** > **Add-ins**.
2. In the **Manage** dropdown at the bottom, select **COM Add-ins** and click **Go...**.
3. Uncheck all active add-ins (e.g., third-party PDF creators, bibliography plugins, grammar extensions).
4. Restart Word normally and re-enable add-ins one by one to isolate the conflicting extension.

### Rebuilding the Default Template (`Normal.dotm`)
Corrupted global templates cause startup freezes or abnormal default formatting:
1. Close all instances of Microsoft Word.
2. In File Explorer, navigate to:
   ```text
   %AppData%\Microsoft\Templates
   ```
3. Locate `Normal.dotm` and rename it to `Normal.old.dotm`.
4. Launch Word. Word will automatically generate a fresh, clean `Normal.dotm` file.

---

## 3. Formatting & Page Layout Anomalies

### Phantom Blank Pages
- **Cause**: Stray empty paragraphs or section breaks pushing content to subsequent pages.
- **Solution**:
  1. Press `Ctrl + Shift + 8` (or `Cmd + 8` on macOS) to toggle non-printing formatting marks (**?**).
  2. Locate any trailing paragraph marks (`?`) or `======== Section Break (Next Page) ========`.
  3. Highlight and delete the excess break marker.
  4. If a blank page follows a table at the very end of a document, select the inevitable trailing paragraph mark below the table and set its font size to `1 pt` with `0 pt` spacing.

### Broken List Numbering (e.g., Jumping from 1 to 14)
1. Right-click the misbehaving number.
2. Select **Restart at 1** or **Set Numbering Value...**.
3. If numbers turn into thick black rectangles, the list font symbol cache is corrupted. Highlight the list, select **Define New Multilevel List**, click **More >>**, and reset the font format.

---

## 4. Cloud Sync & "Upload Blocked" Errors

### Clearing the Office Document Cache
When OneDrive displays "Upload Blocked" or "We couldn't save your changes":
1. Save a local offline backup copy via **File** > **Save As**.
2. Close Microsoft Word.
3. Open Windows Settings > **Accounts** > **Access work or school** and verify that your organizational credential is valid.
4. Clear the cached identity tokens:
   - Navigate to: `%LocalAppData%\Microsoft\Office\16.0\OfficeFileCache`
   - Delete all files within this directory.
5. Re-open Word and sign back in to resume synchronized cloud co-authoring.

---

## 5. Diagnostic Summary Reference Table

| Symptom | Primary Root Cause | Instant Fix |
| :--- | :--- | :--- |
| **Word hangs on "Loading Add-ins"** | Incompatible COM plugin | Launch with `winword /safe` and disable COM add-ins |
| **Document won't open / XML error** | Damaged schema tree | Use **File** > **Open** > **Open and Repair** |
| **Equations display as square boxes** | Missing Cambria Math font | Reinstall system fonts or repair Office via Control Panel |
| **Cannot edit text ("Selection is locked")** | Unactivated license / Restrict Editing | Sign into Office account or click **Review** > **Restrict Editing** > **Stop Protection** |
| **Blurry text on 4K / external monitors** | High-DPI scaling mismatch | Go to **File** > **Options** > **General** > choose **Optimize for compatibility** |
