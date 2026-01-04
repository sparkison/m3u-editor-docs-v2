---
sidebar_position: 1
description: Import VOD and Series data into M3U-Editor
title: Media Server Integration Settings 
hide_title: true
tags:
  - Integrations
  - Emby
  - Jellyfin
 
---

<div style={{ textAlign: 'center', padding: '0 0 2rem 0' }}>
  <img src="/img/logo.png" alt="M3U Editor logo" style={{ width: '220px', maxWidth: '10%' }} />
</div>


# Media Server Integration Settings
  This document describes several configuration options that exist for media server integrations.

## ⚡ Media Server Action Menu
The media server integration contains various actionable items depicted below
 
 ![Media Server Intergrations Action Menu](/img/doc_imgs/media_server_integration_action_menu.png)

### Test Connection

**Purpose:** Tests the connection to the media server

**Behavior:**
* Calls the MediaServerService to test connectivity
* Shows success notification with server name and version if successful
* Shows error notification with failure message if unsuccessful

---

### Sync Now
**Purpose:** Manually triggers a full sync of content from the media server

**Behavior:**
* Will sync all content from the media server. For large libraries, this may take several minutes.
* Dispatches a SyncMediaServer job to the queue
* Shows success notification that sync has started

---

### Cleanup Duplicates

---

### Edit

---

### View Playlist

---

### Delete

---

:::danger Disclaimer
M3U Editor is an independent, open-source playlist manager — **not an IPTV provider**. We don't host channels or partner with streaming services. Please only use content you're authorized to access.
:::
