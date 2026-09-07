---
sidebar_position: 3
title: User Guide
slug: /user-guide
---

# Microsoft Word: Comprehensive User Guide

This guide provides an in-depth reference for advanced formatting, document layout architecture, reference generation, collaboration workflows, and output distribution in Microsoft Word.

---

## 1. Document Layout & Section Architecture

Understanding **Sections** is critical for mastering complex Word documents:

```
Document
 +-- Section 1: Front Matter (Roman Numerals: i, ii, iii; No Header)
 +-- Section 2: Main Content (Arabic Numerals: 1, 2, 3; Running Headers)
 +-- Section 3: Appendix (Landscape Orientation; Letters: A-1, A-2)
```

### Page Breaks vs. Section Breaks
- **Page Break (`Ctrl + Enter`)**: Starts text at the top of the next page without altering page layout settings.
- **Section Break (Next Page)**: Creates a new section boundary on the following page. Use this when altering:
  - Margins or orientation (e.g., switching a single page to Landscape for a wide table).
  - Headers and footers (e.g., different first page or unlinking from prior sections).
  - Column counts (e.g., 2-column academic text following a 1-column abstract).
- **Section Break (Continuous)**: Inserts a section break without forcing a new page. Ideal for switching from single-column to multi-column layouts mid-page.

### Configuring Unlinked Headers & Footers
1. Double-click the Header or Footer area in Section 2.
2. In the **Header & Footer** ribbon tab, click to deselect **Link to Previous**.
3. You can now edit Section 2 headers without altering Section 1.

---

## 2. Advanced Styles & Typography

### Customizing the Styles Palette
Rather than reformatting individual paragraphs, configure styles globally:
1. In the **Home** tab, right-click **Heading 1** in the Styles gallery and select **Modify**.
2. Adjust font family, font size, bolding, and color.
3. Click the **Format** dropdown (bottom-left of dialog) > **Paragraph**:
   - Set **Space Before** (e.g., 12 pt) and **Space After** (e.g., 6 pt).
   - Check **Keep with next** on the *Line and Page Breaks* tab to prevent orphaned headings at page bottoms.
4. Select **New documents based on this template** to persist these styles across future files.

### Multilevel Lists & Numbered Outlines
To bind numbered outlines (e.g., `1.0`, `1.1`, `1.1.1`) to Heading styles:
1. In the **Home** tab > **Paragraph** group, click **Multilevel List**.
2. Under **List Library**, choose the format displaying `1 Heading 1, 1.1 Heading 2`.
3. Applying `Heading 1` now automatically prefixes `1.`, `2.`, while `Heading 2` prefixes `1.1`, `1.2`.

---

## 3. Automated References & Citations

### Generating a Table of Contents (TOC)
1. Position your insertion point where the TOC belongs.
2. Go to **References** > **Table of Contents**.
3. Select an **Automatic Table** style.
4. *Updating*: Right-click the TOC at any time and select **Update Field** > **Update entire table**.

### Managing Citations and Bibliographies
Word includes a native reference citation engine supporting **APA 7th**, **MLA 9th**, **Chicago**, and **IEEE**:
1. Go to **References** > **Style** > choose your citation style.
2. Click **Insert Citation** > **Add New Source**.
3. Choose source type (*Book*, *Journal Article*, *Website*, *Conference Proceeding*) and fill in bibliographic fields.
4. To insert the bibliography at the document end, click **References** > **Bibliography** > **Insert Bibliography**.

---

## 4. Collaboration & Reviewing

### Track Changes
Collaborate safely with colleagues without overwriting original content:
- Toggle tracking via **Review** > **Track Changes** (`Ctrl + Shift + E`).
- **Reviewing Views**:
  - **Simple Markup**: Shows a clean final document with red margin markers indicating revisions.
  - **All Markup**: Displays every insertion in color and deletions in strike-through balloons.
  - **No Markup**: Previews the document as if all edits were accepted.
  - **Original**: Displays the document prior to any revisions.
- **Accepting/Rejecting**: Use the **Accept** and **Reject** buttons in the Review tab to cycle through edits individually or accept all at once.

### Comments & Mentions
- Highlight text and press `Ctrl + Alt + M` (Windows) or `Cmd + Option + M` (macOS) to add a comment.
- Type `@name` to mention team members. Word sends them an automated email notification with a direct link to the comment thread.

---

## 5. Mail Merge Automation

Automate the batch generation of personalized letters, certificates, emails, or mailing labels:
1. Go to **Mailings** > **Start Mail Merge** > choose **Letters** or **Email Messages**.
2. Click **Select Recipients** > **Use an Existing List...** and connect your Microsoft Excel spreadsheet (`.xlsx`).
3. Position your cursor in the document and click **Insert Merge Field** to place personalized placeholders (e.g., `?First_Name?`, `?Address?`, `?Amount_Due?`).
4. Click **Preview Results** to verify individual records.
5. Click **Finish & Merge** > **Print Documents** or **Send Email Messages**.

---

## 6. Document Inspection & Export

### Document Inspector (Sanitization)
Before distributing confidential documents externally:
1. Go to **File** > **Info** > **Check for Issues** > **Inspect Document**.
2. Check for hidden metadata: Author names, company name, revision logs, hidden text, and invisible XML data.
3. Click **Remove All** on sensitive items.

### Exporting to PDF
1. Go to **File** > **Export** > **Create PDF/XPS Document**.
2. Click **Options**:
   - Check **Create bookmarks using: Word headings** to ensure the generated PDF has an interactive navigation tree.
   - Check **Document properties** and **Document structure tags for accessibility**.
3. Click **Publish**.
