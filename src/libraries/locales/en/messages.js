let systemMessages = {
    "translation_version": {
        "message": "0"
    },
    "yes": {
        "message": "Yes",
        "description": "General Yes message to be used across the application"
    },
    "no": {
        "message": "No",
        "description": "General No message to be used across the application"
    },
    "on": {
        "message": "On"
    },
    "off": {
        "message": "Off"
    },
    "auto": {
        "message": "Auto"
    },
    "error": {
        "message": "Error: {{errorMessage}}"
    },
    "errorTitle": {
        "message": "Error"
    },
    "warningTitle": {
        "message": "Warning"
    },
    "noticeTitle": {
        "message": "Notice"
    },
    "dontShowAgain": {
        "message": "Don't show again"
    },
    "operationNotSupported": {
        "message": "This operation is not supported by your hardware."
    },
    "storageDeviceNotReady": {
        "message": "The storage device is not ready. In the case of a microSD card, make sure it is properly recognised by your flight controller."
    },
    "options_title": {
        "message": "Application Options"
    },
    "connect": {
        "message": "Connect"
    },
    "connecting": {
        "message": "Connecting"
    },
    "disconnect": {
        "message": "Disconnect"
    },
    "portsSelectManual": {
        "message": "Manual Selection"
    },
    "portsSelectVirtual": {
        "message": "Virtual Mode (Experimental)",
        "description": "Configure a Virtual Flight Controller without the need of a physical FC."
    },
    "virtualMSPVersion": {
        "message": "Virtual Firmware Version"
    },
    "portOverrideText": {
        "message": "Port:"
    },
    "autoConnect": {
        "message": "Auto-Connect"
    },
    "close": {
        "message": "Close"
    },
    "OK": {
        "message": "OK"
    },
    "cancel": {
        "message": "Cancel"
    },
    "autoConnectEnabled": {
        "message": "Auto-Connect: Enabled - Configurator automatically tries to connect when new port is detected"
    },
    "autoConnectDisabled": {
        "message": "Auto-Connect: Disabled - User needs to select the correct serial port and click \"Connect\" button on its own"
    },
    "expertMode": {
        "message": "Enable Expert Mode"
    },
    "expertModeDescription": {
        "message": "Show unreleased and potentially unstable builds"
    },
    "permanentExpertMode": {
        "message": "Permanently enable Expert Mode"
    },
    "warningSettings": {
        "message": "Show warnings"
    },
    "rememberLastTab": {
        "message": "Reopen last tab on connect"
    },
    "analyticsOptOut": {
        "message": "Opt out of the anonymised collection of statistics data"
    },
    "connectionTimeout": {
        "message": "Set connection timeout to allow longer initialisation on device plugin or reboot",
        "description": "Change timeout on auto-connect and reboot so the bus has more time to initialize after being detected by the system"
    },
    "showAllSerialDevices": {
        "message": "Show all serial devices (for manufacturers or development)",
        "description": "Do not filter serial devices using VID/PID values (for manufacturers or development)"
    },
    "showVirtualMode": {
        "message": "Enable virtual connection mode",
        "description": "Text for the option to enable or disable the virtual FC"
    },
    "cordovaForceComputerUI": {
        "message": "Use computers interface instead of phones interface"
    },
    "language_changed": {
        "message": "Language change saved"
    },
    "language_choice_message": {
        "message": "Change language:",
        "description": "Try and be brief"
    },
    "language_default": {
        "message": "System Default"
    },
    "language_default_pretty": {
        "message": "System Default ($t(detectedLanguage))"
    },
    "language_ca": {
        "message": "Catal\u00e0",
        "description": "Don't translate!!!"
    },
    "language_de": {
        "message": "Deutsch",
        "description": "Don't translate!!!"
    },
    "language_en": {
        "message": "English",
        "description": "Don't translate!!!"
    },
    "language_es": {
        "message": "Espa\u00f1ol",
        "description": "Don't translate!!!"
    },
    "language_eu": {
        "message": "Euskera",
        "description": "Don't translate!!!"
    },
    "language_fr": {
        "message": "Fran\u00e7ais",
        "description": "Don't translate!!!"
    },
    "language_gl": {
        "message": "Galego",
        "description": "Don't translate!!!"
    },
    "language_hr": {
        "message": "Hrvatski",
        "description": "Don't translate!!!"
    },
    "language_hu": {
        "message": "Magyar",
        "description": "Don't translate!!!"
    },
    "language_id": {
        "message": "Bahasa Indonesia",
        "description": "Don't translate!!!"
    },
    "language_it": {
        "message": "Italiano",
        "description": "Don't translate!!!"
    },
    "language_ja": {
        "message": "\u65E5\u672C\u8A9E",
        "description": "Don't translate!!!"
    },
    "language_ko": {
        "message": "\ud55c\uad6d\uc5b4",
        "description": "Don't translate!!!"
    },
    "language_lv": {
        "message": "Latvie\u0161u",
        "description": "Don't translate!!!"
    },
    "language_nl": {
        "message": "Nederlands",
        "description": "Don't translate!!!"
    },
    "language_pt": {
        "message": "Portugu\u00EAs",
        "description": "Don't translate!!!"
    },
    "language_pt_BR": {
        "message": "Portugu\u00EAs Brasileiro",
        "description": "Don't translate!!!"
    },
    "language_pl": {
        "message": "polski",
        "description": "Don't translate!!!"
    },
    "language_ru": {
        "message": "\u0420\u0443\u0441\u0441\u043A\u0438\u0439 \u044F\u0437\u044B\u043A",
        "description": "Don't translate!!!"
    },
    "language_sv": {
        "message": "Svenska",
        "description": "Don't translate!!!"
    },
    "language_zh_CN": {
        "message": "\u7b80\u4f53\u4e2d\u6587",
        "description": "Don't translate!!!"
    },
    "language_zh_TW": {
        "message": "\u7e41\u9ad4\u4e2d\u6587",
        "description": "Don't translate!!!"
    },

    "sensorDataFlashNotFound": {
        "message": "No dataflash <br>chip found",
        "description": "Text of the dataflash image in the header of the page."
    },
    "sensorDataFlashFreeSpace": {
        "message": "Dataflash: free space",
        "description": "Text of the dataflash image in the header of the page."
    },
    "sensorStatusGyro": {
        "message": "Gyroscope"
    },
    "sensorStatusGyroShort": {
        "message": "Gyro",
        "description": "Text of the image in the top sensors icons. Please keep it short."
    },
    "sensorStatusAccel": {
        "message": "Accelerometer"
    },
    "sensorStatusAccelShort": {
        "message": "Accel",
        "description": "Text of the image in the top sensors icons. Please keep it short."
    },
    "sensorStatusMag": {
        "message": "Magnetometer"
    },
    "sensorStatusMagShort": {
        "message": "Mag",
        "description": "Text of the image in the top sensors icons. Please keep it short."
    },
    "sensorStatusBaro": {
        "message": "Barometer"
    },
    "sensorStatusBaroShort": {
        "message": "Baro",
        "description": "Text of the image in the top sensors icons. Please keep it short."
    },
    "sensorStatusGPS": {
        "message": "GPS"
    },
    "sensorStatusGPSShort": {
        "message": "GPS",
        "description": "Text of the image in the top sensors icons. Please keep it short."
    },
    "sensorStatusSonar": {
        "message": "Sonar / Range finder"
    },
    "sensorStatusSonarShort": {
        "message": "Sonar",
        "description": "Text of the image in the top sensors icons. Please keep it short."
    },
    "checkForConfiguratorUnstableVersions": {
        "message": "Show update notifications for unstable versions of the configurator"
    },
    "configuratorUpdateNotice": {
        "message": "You are using an outdated version of the <b>Betaflight Configurator</b>.<br>$t(configuratorUpdateHelp.message)"
    },
    "configuratorUpdateHelp": {
        "message": "Using a newer version of the firmware with an outdated version of Configurator means that changing some settings will result in a <strong>corrupted firmware configuration and a non-working craft</strong>. Furthermore, some features of the firmware will only be configurable in CLI.<br><strong>Betaflight Configurator version <b>$1</b> is available for download online</strong>, please visit <a href=\"$2\" target=\"_blank\" rel=\"noopener noreferrer\">this page</a> to download and install the latest version with fixes and improvements.<br>Please close the configurator window before updating."
    },
    "configuratorUpdateWebsite": {
        "message": "Go to Release Website"
    },
    "deviceRebooting": {
        "message": "Device - <span class=\"message-negative\">Rebooting</span>"
    },
    "deviceRebooting_flashBootloader": {
        "message": "Device - <span class=\"message-negative\">Rebooting to FLASH BOOTLOADER</span>"
    },
    "deviceRebooting_romBootloader": {
        "message": "Device - <span class=\"message-negative\">Rebooting to ROM BOOTLOADER</span>"
    },
    "deviceReady": {
        "message": "Device - <span class=\"message-positive\">Ready</span>"
    },

    "backupFileIncompatible": {
        "message": "Backup file provided was generated for previous version of the configurator and is incompatible with this version of configurator. Sorry"
    },

    "backupFileUnmigratable": {
        "message": "Backup file provided was generated by a previous version of the configurator and is not migratable. Sorry."
    },

    "configMigrationFrom": {
        "message": "Migrating configuration file generated by configurator: $1"
    },
    "configMigratedTo": {
        "message": "Migrated configuration to configurator: $1"
    },
    "configMigrationSuccessful": {
        "message": "Configuration migration complete, migrations applied: $1"
    },

    "tabFirmwareFlasher": {
        "message": "Firmware Flasher"
    },
    "tabLanding": {
        "message": "Welcome"
    },
    "tabChangelog": {
        "message": "Changelog"
    },
    "tabPrivacyPolicy": {
        "message": "Privacy Policy"
    },
    "tabHelp": {
        "message": "Documentation & Support"
    },
    "tabOptions": {
        "message": "Options"
    },

    "tabSetup": {
        "message": "Setup"
    },
    "tabSetupOSD": {
        "message": "OSD Setup"
    },
    "tabConfiguration": {
        "message": "Configuration"
    },
    "tabPorts": {
        "message": "Ports"
    },
    "tabPidTuning": {
        "message": "PID Tuning"
    },
    "tabReceiver": {
        "message": "Receiver"
    },
    "tabModeSelection": {
        "message": "Mode Selection"
    },
    "tabServos": {
        "message": "Servos"
    },
    "tabFailsafe": {
        "message": "Failsafe"
    },
    "tabTransponder": {
        "message": "Race Transponder"
    },
    "tabOsd": {
        "message": "OSD"
    },
    "tabVtx": {
        "message": "Video Transmitter"
    },
    "tabPower": {
        "message": "Power & Battery"
    },
    "tabGPS": {
        "message": "GPS"
    },
    "tabMotorTesting": {
        "message": "Motors"
    },
    "tabLedStrip": {
        "message": "LED Strip"
    },
    "tabRawSensorData": {
        "message": "Sensors"
    },
    "tabCLI": {
        "message": "CLI"
    },
    "tabLogging": {
        "message": "Tethered Logging"
    },
    "tabOnboardLogging": {
        "message": "Blackbox"
    },
    "tabAdjustments": {
        "message": "Adjustments"
    },
    "tabAuxiliary": {
        "message": "Modes"
    },

    "logActionHide": {
        "message": "Hide Log"
    },
    "logActionShow": {
        "message": "Show Log"
    },

    "serialErrorFrameError": {
        "message": "Serial connection error: bad framing"
    },
    "serialErrorParityError": {
        "message": "Serial connection error: bad parity"
    },

    "serialPortOpened": {
        "message": "Serial port <span class=\"message-positive\">successfully</span> opened with ID: $1"
    },
    "serialPortOpenFail": {
        "message": "<span class=\"message-negative\">Failed</span> to open serial port"
    },
    "serialPortClosedOk": {
        "message": "Serial port <span class=\"message-positive\">successfully</span> closed"
    },
    "serialPortClosedFail": {
        "message": "<span class=\"message-negative\">Failed</span> to close serial port"
    },
    "serialUnrecoverable" : {
        "message": "Unrecoverable <span class=\"message-negative\">failure</span> of serial connection, disconnecting..."
    },
    "serialPortLoading" : {
        "message": "Loading ..."
    },
    "usbDeviceOpened": {
        "message": "USB device <span class=\"message-positive\">successfully</span> opened with ID: $1"
    },
    "usbDeviceOpenFail": {
        "message": "<span class=\"message-negative\">Failed</span> to open USB device!"
    },
    "usbDeviceClosed": {
        "message": "USB device <span class=\"message-positive\">successfully</span> closed"
    },
    "usbDeviceCloseFail": {
        "message": "<span class=\"message-negative\">Failed</span> to close USB device"
    },
    "usbDeviceUdevNotice": {
        "message": "Are <strong>udev rules</strong> installed correctly? See docs for instructions"
    },
    "stm32UsbDfuNotFound": {
        "message": "USB DFU not found"
    },
    "stm32RebootingToBootloader": {
        "message": "Initiating reboot to bootloader ..."
    },
    "stm32RebootingToBootloaderFailed": {
        "message": "Rebooting device to bootloader: FAILED"
    },
    "stm32TimedOut": {
        "message": "STM32 - timed out, programming: FAILED"
    },
    "stm32WrongResponse": {
        "message": "STM32 Communication failed, wrong response, expected: $1 (0x$2) received: $3 (0x$4)"
    },
    "stm32ContactingBootloader": {
        "message": "Contacting bootloader ..."
    },
    "stm32ContactingBootloaderFailed": {
        "message": "Communication with bootloader failed"
    },
    "stm32ResponseBootloaderFailed": {
        "message": "No response from the bootloader, programming: FAILED"
    },
    "stm32GlobalEraseExtended": {
        "message": "Executing global chip erase (via extended erase) ..."
    },
    "stm32LocalEraseExtended": {
        "message": "Executing local erase (via extended erase) ..."
    },
    "stm32GlobalErase": {
        "message": "Executing global chip erase ..."
    },
    "stm32LocalErase": {
        "message": "Executing local erase ..."
    },
    "stm32InvalidHex": {
        "message": "Invalid hex"
    },
    "stm32Erase": {
        "message": "Erasing ..."
    },
    "stm32Flashing": {
        "message": "Flashing ..."
    },
    "stm32Verifying": {
        "message": "Verifying ..."
    },
    "stm32ProgrammingSuccessful": {
        "message": "Programming: SUCCESSFUL"
    },
    "stm32ProgrammingFailed": {
        "message": "Programming: FAILED"
    },
    "stm32AddressLoadFailed": {
        "message": "Address load for option bytes sector failed. Very likely due to read protection."
    },
    "stm32AddressLoadSuccess": {
        "message": "Address load for option bytes sector succeeded."
    },
    "stm32AddressLoadUnknown": {
        "message": "Address load for option bytes sector failed with unknown error. Aborting."
    },
    "stm32NotReadProtected": {
        "message": "Read protection not active"
    },
    "stm32ReadProtected": {
        "message": "Board seems read protected. Unprotecting. Do not disconnect/unplug!"
    },
    "stm32UnprotectSuccessful": {
        "message": "Unprotect successful."
    },
    "stm32UnprotectUnplug": {
        "message": "ACTION REQUIRED: Unplug and re-connect flight controller in DFU mode to try flashing again!"
    },
    "stm32UnprotectFailed": {
        "message": "Failed to unprotect board"
    },
    "stm32UnprotectInitFailed": {
        "message": "Failed to initiate unprotect routine"
    },

    "noConfigurationReceived": {
        "message": "No configuration received within <span class=\"message-negative\">10 seconds</span>, communication <span class=\"message-negative\">failed</span>"
    },
    "firmwareVersionNotSupported": {
        "message": "This firmware version is <span class=\"message-negative\">not supported</span>. Please upgrade to firmware that supports api version <strong>$1</strong> or higher. Use CLI for backup before flashing. CLI backup/restore procedure is in the documention.<br />Alternatively download and use an old version of the configurator if you are not ready to upgrade."
    },
    "firmwareTypeNotSupported": {
        "message": "Non - Betaflight firmware is <span class=\"message-negative\">not supported</span>, except for CLI mode."
    },
    "firmwareUpgradeRequired": {
        "message": "The firmware on this device needs upgrading to a newer version. Use CLI for backup before flashing. CLI backup/restore procedure is in the documention.<br />Alternatively download and use an old version of the configurator if you are not ready to upgrade."
    },
    "resetToCustomDefaultsDialog": {
        "message": "There are custom defaults for this board available. Normally, a board will not work properly unless custom defaults are applied.<br />Do you want to apply the custom defaults for this board?"
    },
    "resetToCustomDefaultsAccept": {
        "message": "Apply Custom Defaults"
    },
    "reportProblemsDialogHeader": {
        "message": "The following <strong>problems with your configuration</strong> were detected:"
    },
    "reportProblemsDialogFooter": {
        "message": "Please <strong>fix these problems before attempting to fly your craft</strong>."
    },
    "reportProblemsDialogAPI_VERSION_MAX_SUPPORTED": {
        "message": "<strong>the version of configurator that you are using ($3) is older than the firmware you are using ($4)</strong>.<br>$t(configuratorUpdateHelp.message)"
    },
    "reportProblemsDialogMOTOR_PROTOCOL_DISABLED": {
        "message": "<strong>there is no motor output protocol selected</strong>.<br>Please select a motor output protocol appropriate for your ESCs in '$t(configurationEscFeatures.message)' on the '$t(tabMotorTesting.message)' tab.<br>$t(escProtocolDisabledMessage.message)"
    },
    "reportProblemsDialogACC_NEEDS_CALIBRATION": {
        "message": "<strong>the accelerometer is enabled but it is not calibrated</strong>.<br>If you plan to use the accelerometer, please follow the instructions for '$t(initialSetupButtonCalibrateAccel.message)' on the '$t(tabSetup.message)' tab. If any function that requires the accelerometer (auto level modes, GPS rescue, ...) is enabled, arming of the craft will be disabled until the accelerometer has been calibrated.<br>If you are not planning on using the accelerometer it is recommended that you disable it in '$t(configurationSystem.message)' on the '$t(tabConfiguration.message)' tab."
    },

    "infoVersionOs": {
        "message" : "OS: <strong>{{operatingSystem}}</strong>",
        "description": "Message that appears in the GUI log panel indicating operating system"
    },
    "infoVersionConfigurator": {
        "message" : "Configurator: <strong>{{configuratorVersion}}</strong>",
        "description": "Message that appears in the GUI log panel indicating Configurator version"
    },
    "buildServerLoaded": {
        "message" : "Loaded builds information for $1 from build server."
    },
    "buildServerLoadFailed": {
        "message" : "<b>Build server query for $1 releases failed, using cached information. Reason: <code>$2</code></b>"
    },
    "buildServerUsingCached": {
        "message" : "Using cached builds information for $1."
    },
    "releaseCheckLoaded": {
        "message" : "Loaded release information for $1 from GitHub."
    },
    "releaseCheckFailed": {
        "message" : "<b>GitHub query for $1 releases failed, using cached information. Reason: <code>$2</code></b>"
    },
    "releaseCheckCached": {
        "message" : "Using cached release information for $1 releases."
    },
    "releaseCheckNoInfo": {
        "message" : "No release information available for $1."
    },
    "tabSwitchConnectionRequired": {
        "message": "You need to <strong>connect</strong> before you can view any of the tabs."
    },
    "tabSwitchWaitForOperation": {
        "message": "You <span class=\"message-negative\">can't</span> do this right now, please wait for current operation to finish ..."
    },

    "tabSwitchUpgradeRequired": {
        "message": "You need to <strong>upgrade</strong> your firmware to the latest version of Betaflight before you can use the $1 tab."
    },
    "firmwareVersion": {
        "message": "Firmware Version: <strong>$1</strong>"
    },
    "apiVersionReceived": {
        "message": "MultiWii API version: <strong>$1</strong>"
    },
    "uniqueDeviceIdReceived": {
        "message": "Unique device ID: <strong>0x$1</strong>"
    },
    "craftNameReceived": {
        "message": "Craft name: <strong>$1</strong>"
    },
    "armingDisabled": {
        "message": "<strong>Arming Disabled</strong>"
    },
    "armingEnabled": {
        "message": "<strong>Arming Enabled</strong>"
    },
    "runawayTakeoffPreventionDisabled": {
        "message": "<strong>Runaway Takeoff Prevention temporarily Disabled</strong>"
    },
    "runawayTakeoffPreventionEnabled": {
        "message": "<strong>Runaway Takeoff Prevention Enabled</strong>"
    },
    "boardInfoReceived": {
        "message": "Board: <strong>$1</strong>, version: <strong>$2</strong>"
    },
    "buildInfoReceived": {
        "message": "Running firmware released on: <strong>$1</strong>"
    },
    "fcInfoReceived": {
        "message": "Flight controller info, identifier: <strong>$1</strong>, version: <strong>$2</strong>"
    },
    "versionLabelTarget": {
        "message": "Target"
    },
    "versionLabelFirmware": {
        "message": "Firmware"
    },
    "versionLabelConfigurator": {
        "message": "Configurator"
    },

    "notifications_app_just_updated_to_version": {
        "message": "Application just updated to version: $1"
    },
    "notifications_click_here_to_start_app": {
        "message": "Click here to start the application"
    },

    "statusbar_port_utilization": {
        "message": "Port utilization:",
        "description": "Port utilization text shown in the status bar"
    },
    "statusbar_usage_download": {
        "message": "D:",
        "description": "References 'Download' in the status bar, port utilization. Keep one character long if possible"
    },
    "statusbar_usage_upload": {
        "message": "U:",
        "description": "References 'Upload' in the status bar, port utilization. Keep one character long if possible"
    },
    "statusbar_packet_error": {
        "message": "Packet error:",
        "description": "Packet error text shown in the status bar"
    },
    "statusbar_i2c_error": {
        "message": "I2C error:",
        "description": "CPU load text shown in the status bar"
    },
    "statusbar_cycle_time": {
        "message": "Cycle Time:",
        "description": "Cycle time text shown in the status bar"
    },
    "statusbar_cpu_load": {
        "message": "CPU Load:",
        "description": "CPU load text shown in the status bar"
    },

    "dfu_connect_message": {
        "message": "Please use the Firmware Flasher to access DFU devices"
    },
    "dfu_erased_kilobytes": {
        "message": "Erased $1 kB of flash <span class=\"message-positive\">successfully</span>"
    },
    "dfu_device_flash_info": {
        "message": "Detected device with total flash size $1 KiB"
    },
    "dfu_hex_address_errors": {
        "message": "<span class=\"message-negative\">Error</span>: Firmware image contains addresses not found on target device"
    },
        "dfu_error_image_size": {
        "message": "<span class=\"message-negative\">Error</span>: Supplied image is larger then flash available on the chip! Image: $1 KiB, limit = $2 KiB"
    },

    "eeprom_saved_ok": {
        "message": "EEPROM <span class=\"message-positive\">saved</span>"
    },

    "defaultWelcomeIntro": {
        "message": "Welcome to <strong>Betaflight - Configurator</strong>, a utility designed to simplify updating, configuring and tuning of your flight controller."
    },

    "defaultWelcomeHead": {
        "message": "Hardware"
    },
    "defaultWelcomeText": {
        "message": "The application supports all hardware that can run Betaflight. Check flash tab for full list of hardware.<br /><br /> <a href=\"https://github.com/betaflight/blackbox-log-viewer/releases\" target=\"_blank\" rel=\"noopener noreferrer\">Download Betaflight Blackbox Log Viewer</a><br /><br /><a href=\"https://github.com/betaflight/betaflight-tx-lua-scripts/releases\" target=\"_blank\" rel=\"noopener noreferrer\">Download Betaflight TX Lua Scripts</a><br /><br />The firmware source code can be downloaded from <a href=\"https://github.com/betaflight/betaflight\" target=\"_blank\" rel=\"noopener noreferrer\">here</a><br /><br />The latest <b>STM USB VCP Drivers</b> can be downloaded from <a href=\"http://www.st.com/web/en/catalog/tools/PF257938\" target=\"_blank\" rel=\"noopener noreferrer\">here</a><br />For legacy hardware using a CP210x USB to serial chip:<br />The latest <b>CP210x Drivers</b> can be downloaded from <a href=\"https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers\" target=\"_blank\" rel=\"noopener noreferrer\">here</a><br />The latest <b>Zadig</b> for Windows USB driver installation can be downloaded from <a href=\"http://zadig.akeo.ie/\" target=\"_blank\" rel=\"noopener noreferrer\">here</a><br /><b>ImpulseRC Driver Fixer</b> can be downloaded <a href=\"https://impulserc.com/pages/downloads\" target=\"blank\" rel=\"noopener noreferrer\">here</a>"
    },
    "defaultContributingHead": {
        "message": "Contributing"
    },
    "defaultContributingText": {
        "message": "If you would like to help make Betaflight even better you can help in many ways, including:<br /><ul><li>using your knowledge of Betaflight to create or update content on <a href=\"https://github.com/betaflight/betaflight/wiki\" target=\"_blank\" rel=\"noopener noreferrer\">our Wiki</a>, or answering other users' questions in online forums;</li><li><a href=\"https://github.com/betaflight/betaflight/blob/master/docs/development/Development.md\" target=\"_blank\" rel=\"noopener noreferrer\">contributing code</a> to the firmware and Configurator - new features, fixes, improvements;</li><li>testing <a href=\"https://github.com/Betaflight/betaflight/pulls\" target=\"_blank\" rel=\"noopener noreferrer\">new features and fixes</a> and providing feedback;</li><li>helping other users solve the problems they report in <a href=\"https://github.com/betaflight/betaflight/issues\" target=\"_blank\" rel=\"noopener noreferrer\">our issue tracker</a>, and participating in discussions on feature requests;</li><li><a href=\"https://github.com/betaflight/betaflight/tree/master/README.md#Translators\" target=\"_blank\" rel=\"noopener noreferrer\">translating</a> Betaflight Configurator into a new language, or helping to maintain the existing translations.</li></ul>"
    },
    "defaultFacebookText": {
        "message": "We also have a <a href=\"https://www.facebook.com/groups/betaflightgroup/\" target=\"_blank\" rel=\"noopener noreferrer\">Facebook Group</a>.<br />Join us to get a place to talk about Betaflight, ask configuration questions, or just hang out with fellow pilots."
    },
    "defaultDiscordText": {
        "message": "Betaflight <a href=\"https://discord.betaflight.com/invite\" target=\"_blank\" rel=\"noopener noreferrer\">Discord Server</a>.<br />Share your flight experience, talk about Betaflight, help other people or get some help for yourself from the community."
    },
    "defaultChangelogHead": {
        "message": "Configurator - Changelog"
    },
    "defaultButtonFirmwareFlasher": {
        "message": "Firmware Flasher"
    },
    "defaultDonateHead": {
        "message": "Open Source / Donation Notice"
    },
    "defaultDonateText": {
        "message": "<p><strong>Betaflight</strong> is a flight controller software that is <strong>open source</strong> and is available free of charge <strong>without warranty</strong> to all users.</p><p>If you found the Betaflight or Betaflight Configurator useful, please consider <strong>supporting</strong> its development by donating.</p>"
    },
    "defaultDonateBottom": {
        "message": "<p>If you want to contribute financially on an ongoing basis, you should consider becoming a patron for us on $t(patreonLink.message).</p>"
    },
    "patreonLink": {
        "message": "<a href=\"https://www.patreon.com/betaflight\" target=\"_blank\" rel=\"noopener noreferrer\">Patreon</a>",
        "description": "Patreon is name, and should not require translation"
    },
    "defaultDonate": {
        "message": "Donate"
    },
    "defaultSponsorsHead": {
        "message": "Sponsors"
    },
    "defaultDocumentationHead": {
        "message": "Documentation / Manual"
    },
    "defaultDocumentation": {
        "message": "Betaflight documentation is available in release notes and wiki.<br /><br />"
    },
    "defaultDocumentation1": {
        "message": "The Betaflight wiki is a great resource for information, it can be found <a href=\"https://github.com/betaflight/betaflight/wiki\" target=\"_blank\" rel=\"noopener noreferrer\">here</a>."
    },
    "defaultDocumentation2": {
        "message": "The release notes for the firmware can be read at GitHub releases page, <a href=\"https://github.com/Betaflight/Betaflight/releases\" target=\"_blank\" rel=\"noopener noreferrer\">here</a>."
    },
    "defaultSupportHead": {
        "message": "Support"
    },
    "defaultSupportSubline1": {
        "message": "Support Sources"
    },
    "defaultSupportSubline2": {
        "message": "Developer"
    },
    "defaultSupport": {
        "message": "For support please search the forums and wiki first or contact your vendor.<br /><br />"
    },
    "defaultSupport1": {
        "message": "<a href=\"http://www.rcgroups.com/forums/showthread.php?t=2464844&page=1\" target=\"_blank\" rel=\"noopener noreferrer\">RC Groups thread</a>"
    },
    "defaultSupport2": {
        "message": "<a href=\"http://betaflight.info\" target=\"_blank\" rel=\"noopener noreferrer\">Betaflight Wiki</a>"
    },
    "defaultSupport3": {
        "message": "<a href=\"https://www.youtube.com/playlist?list=PLwoDb7WF6c8kdK6yHr7vhsU9iRTr5HxP4\" target=\"_blank\" rel=\"noopener noreferrer\">Joshua Bardwell Betaflight Videos</a>"
    },
    "defaultSupport4": {
        "message": "<a href=\"https://github.com/Betaflight\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a>"
    },
    "defaultSupport5": {
        "message": "<a href=\"https://slack.betaflight.com\" target=\"_blank\" rel=\"noopener noreferrer\">Betaflight devs on slack</a>"
    },

    "initialSetupBackupAndRestoreApiVersion": {
        "message": "<span class=\"message-negative\">Backup and restore functionality disabled.</span> You have firmware with API version <span class=\"message-negative\">$1</span>, backup and restore requires <span class=\"message-positive\">$2</span>.  Please backup your settings via the CLI, see Betaflight documentation for procedure."
    },
    "initialSetupButtonCalibrateAccel": {
        "message": "Calibrate Accelerometer"
    },
    "initialSetupCalibrateAccelText": {
        "message": "Place board or frame on <strong>leveled</strong> surface, proceed with calibration, ensure platform is not moving during calibration period"
    },
    "initialSetupButtonCalibrateMag": {
        "message": "Calibrate Magnetometer"
    },
    "initialSetupCalibrateMagText": {
        "message": "Move multirotor at least <strong>360</strong> degrees on all axis of rotation, you have 30 seconds to perform this task"
    },
    "initialSetupButtonCalibratingText": {
        "message": "Calibrating..."
    },
    "initialSetupButtonReset": {
        "message": "Reset Settings"
    },
    "initialSetupResetText": {
        "message": "Restore settings to <strong>default</strong>"
    },
    "initialSetupButtonBackup": {
        "message": "Backup JSON"
    },
    "initialSetupButtonRestore": {
        "message": "Restore JSON"
    },
    "initialSetupButtonRebootBootloader": {
        "message": "Activate Boot Loader / DFU"
    },
    "initialSetupBackupRestoreHeader": {
        "message": "Experimental Backup and Restore"
    },
    "initialSetupBackupRestoreText": {
        "message": "<strong>Backup</strong> your configuration in case of an accident, <strong>CLI</strong> settings are <span class=\"message-negative\">not</span> included - use the command 'diff all' in CLI for this."
    },
    "initialSetupRebootBootloaderText": {
        "message": "Reboot into <strong>boot loader / DFU</strong> mode."
    },
    "initialSetupBackupSuccess": {
        "message": "Backup saved <span class=\"message-positive\">successfully</span>"
    },
    "initialSetupRestoreSuccess": {
        "message": "Configuration restored <span class=\"message-positive\">successfully</span>"
    },
    "initialSetupButtonResetZaxis": {
        "message": "Reset Z axis, offset: 0 deg"
    },
    "initialSetupButtonResetZaxisValue": {
        "message": "Reset Z axis, offset: $1 deg"
    },
    "initialSetupMixerHead": {
        "message": "Mixer Type"
    },
    "initialSetupThrottleHead": {
        "message": "Throttle Settings"
    },
    "initialSetupMinimum": {
        "message": "Minimum:"
    },
    "initialSetupMaximum": {
        "message": "Maximum:"
    },
    "initialSetupFailsafe": {
        "message": "Failsafe:"
    },
    "initialSetupMinCommand": {
        "message": "MinCommand:"
    },
    "initialSetupBatteryHead": {
        "message": "Battery"
    },
    "initialSetupMinCellV": {
        "message": "Min Cell Voltage:"
    },
    "initialSetupMaxCellV": {
        "message": "Max Cell Voltage:"
    },
    "initialSetupVoltageScale": {
        "message": "Voltage Scale:"
    },
    "initialSetupAccelTrimsHead": {
        "message": "Accelerometer trims"
    },
    "initialSetupPitch": {
        "message": "Pitch:"
    },
    "initialSetupRoll": {
        "message": "Roll:"
    },
    "initialSetupMagHead": {
        "message": "Magnetometer"
    },
    "initialSetupInfoHead": {
        "message": "Info"
    },
    "initialSetupBattery": {
        "message": "Battery voltage:"
    },
    "initialSetupBatteryValue": {
        "message": "$1 V"
    },
    "initialSetupDrawn": {
        "message": "Capacity drawn:"
    },
    "initialSetupDrawing": {
        "message": "Current draw:"
    },
    "initialSetupBatteryMahValue": {
        "message": "$1 mAh"
    },
    "initialSetupBatteryAValue": {
        "message": "$1 A"
    },
    "initialSetupRSSI": {
        "message": "RSSI:"
    },
    "initialSetupRSSIValue": {
        "message": "$1 %"
    },
    "initialSetupArmingDisableFlags": {
        "message": "Arming Disable Flags:"
    },
    "initialSetupArmingAllowed": {
        "message": "Arming Allowed"
    },
    "initialSetupArmingDisableFlagsTooltip": {
        "message": "List of flags indicating why arming is currently not allowed. Pass the mouse over the flag or refer to the Wiki ('Arming Sequence & Safety' page) for more info."
    },
    "initialSetupArmingDisableFlagsTooltipNO_GYRO": {
        "message": "A gyro was not detected",
        "description": "Message that pops up to describe the NO_GYRO arming disable flag"
    },
    "initialSetupArmingDisableFlagsTooltipFAILSAFE": {
        "message": "Failsafe is active",
        "description": "Message that pops up to describe the FAILSAFE arming disable flag"
    },
    "initialSetupArmingDisableFlagsTooltipRX_FAILSAFE": {
        "message": "No valid receiver signal is detected",
        "description": "Message that pops up to describe the RX_FAILSAFE arming disable flag"
    },
    "initialSetupArmingDisableFlagsTooltipBAD_RX_RECOVERY": {
        "message": "Your receiver has just recovered from receiver failsafe but the arm switch is on",
        "description": "Message that pops up to describe the BAD_RX_RECOVERY arming disable flag"
    },
    "initialSetupArmingDisableFlagsTooltipBOXFAILSAFE": {
        "message": "The 'FAILSAFE' switch was activated",
        "description": "Message that pops up to describe the BOXFAILSAFE arming disable flag"
    },
    "initialSetupArmingDisableFlagsTooltipRUNAWAY_TAKEOFF": {
        "message": "Runway Takeoff Prevention has been triggered",
        "description": "Message that pops up to describe the RUNAWAY_TAKEOFF arming disable flag"
    },
    "initialSetupArmingDisableFlagsTooltipCRASH": {
        "message": "Disarmed via crash detection",
        "description": "Message that pops up to describe the CRASH arming disable flag"
    },
    "initialSetupArmingDisableFlagsTooltipTHROTTLE": {
        "message": "Throttle channel is too high",
        "description": "Message that pops up to describe the THROTTLE arming disable flag"
    },
    "initialSetupArmingDisableFlagsTooltipANGLE": {
        "message": "Craft is not level (enough)",
        "description": "Message that pops up to describe the ANGLE arming disable flag"
    },
    "initialSetupArmingDisableFlagsTooltipBOOT_GRACE_TIME": {
        "message": "Arming too soon after power on",
        "description": "Message that pops up to describe the BOOT_GRACE_TIME arming disable flag"
    },
    "initialSetupArmingDisableFlagsTooltipNOPREARM": {
        "message": "Prearm switch is not activated or prearm has not been toggled after disarm",
        "description": "Message that pops up to describe the NOPREARM arming disable flag"
    },
    "initialSetupArmingDisableFlagsTooltipLOAD": {
        "message": "System load is too high for safe flight",
        "description": "Message that pops up to describe the LOAD arming disable flag"
    },
    "initialSetupArmingDisableFlagsTooltipCALIBRATING": {
        "message": "Sensor calibration is still ongoing",
        "description": "Message that pops up to describe the CALIBRATING arming disable flag"
    },
    "initialSetupArmingDisableFlagsTooltipCLI": {
        "message": "CLI is active",
        "description": "Message that pops up to describe the CLI arming disable flag"
    },
    "initialSetupArmingDisableFlagsTooltipCMS_MENU": {
        "message": "CMS (config menu) is Active - over OSD or other display -",
        "description": "Message that pops up to describe the CMS_MENU arming disable flag"
    },
    "initialSetupArmingDisableFlagsTooltipOSD_MENU": {
        "message": "OSD menu is active",
        "description": "Message that pops up to describe the OSD_MENU arming disable flag"
    },
    "initialSetupArmingDisableFlagsTooltipBST": {
        "message": "A Black Sheep Telemetry device (TBS Core Pro for example) disarmed and is preventing arming",
        "description": "Message that pops up to describe the BST arming disable flag"
    },
    "initialSetupArmingDisableFlagsTooltipMSP": {
        "message": "MSP connection is active, probably with this Betaflight Configurator",
        "description": "Message that pops up to describe the MSP arming disable flag"
    },
    "initialSetupArmingDisableFlagsTooltipPARALYZE": {
        "message": "Paralyze mode has been activated",
        "description": "Message that pops up to describe the PARALYZE arming disable flag"
    },
    "initialSetupArmingDisableFlagsTooltipGPS": {
        "message": "GPS rescue mode is configured but required number of satellites has not been fixed",
        "description": "Message that pops up to describe the GPS arming disable flag"
    },
    "initialSetupArmingDisableFlagsTooltipRESC": {
        "message": "The 'GPS Rescue' switch was activated",
        "description": "Message that pops up to describe the RESC arming disable flag"
    },
    "initialSetupArmingDisableFlagsTooltipRPMFILTER": {
        "message": "RPM-based filtering is enabled but one or more ESC's are not supplying valid DSHOT telemetry. Check that the ESC's are capable of and have the required firmware installed to support bidirectional DSHOT telemetry.",
        "description": "Message that pops up to describe the RPMFILTER arming disable flag"
    },
    "initialSetupArmingDisableFlagsTooltipREBOOT_REQD": {
        "message": "A configuration change requires a reboot",
        "description": "Message that pops up to describe the REBOOT_REQD arming disable flag"
    },
    "initialSetupArmingDisableFlagsTooltipDSHOT_BBANG": {
        "message": "Bitbanged DSHOT is not working properly and the motors can't be controlled. Likely caused by a timer conflict with other features enabled on the flight controller.",
        "description": "Message that pops up to describe the DSHOT_BBANG arming disable flag"
    },
    "initialSetupArmingDisableFlagsTooltipNO_ACC_CAL": {
        "message": "The accelerometer has not been calibrated and features are enabled that rely on it. Calibrate the accelerometer.",
        "description": "Message that pops up to describe the NO_ACC_CAL arming disable flag"
    },
    "initialSetupArmingDisableFlagsTooltipMOTOR_PROTO": {
        "message": "There is no motor output protocol selected",
        "description": "Message that pops up to describe the MOTOR_PROTO arming disable flag"
    },
    "initialSetupArmingDisableFlagsTooltipARM_SWITCH": {
        "message": "One of the others disarm flags is active when arming",
        "description": "Message that pops up to describe the ARM_SWITCH arming disable flag"
    },
    "initialSetupGPSHead": {
        "message": "GPS"
    },
    "initialSetupInstrumentsHead": {
        "message": "Instruments"
    },
    "initialSetupButtonSave": {
        "message": "Save"
    },
    "initialSetupModel": {
        "message": "Model: $1"
    },
    "initialSetupAttitude": {
        "message": "$1 deg"
    },
    "initialSetupAccelCalibStarted": {
        "message": "Accelerometer calibration started"
    },
    "initialSetupAccelCalibEnded": {
        "message": "Accelerometer calibration <span class=\"message-positive\">finished</span>"
    },
    "initialSetupMagCalibStarted": {
        "message": "Magnetometer calibration started"
    },
    "initialSetupMagCalibEnded": {
        "message": "Magnetometer calibration <span class=\"message-positive\">finished</span>"
    },
    "initialSetupSettingsRestored": {
        "message": "Settings restored to <strong>default</strong>"
    },
    "initialSetupEepromSaved": {
        "message": "EEPROM <span class=\"message-positive\">saved</span>"
    },
    "featureNone": {
        "message": "&lt;Select One&gt;"
    },
    "featureRX_PPM": {
        "message": "PPM/CPPM (single wire)"
    },
    "featureVBAT": {
        "message": "Battery voltage monitoring"
    },
    "featureINFLIGHT_ACC_CAL": {
        "message": "In-flight level calibration"
    },
    "featureRX_SERIAL": {
        "message": "Serial (via UART)"
    },
    "featureMOTOR_STOP": {
        "message": "Don't spin the motors when armed"
    },
    "featureSERVO_TILT": {
        "message": "Servo gimbal"
    },
    "featureSERVO_TILTTip": {
        "message": "This feature enables CAMSTAB mode, which can be used to hold up to two axis steady using the accelerometer"
    },
    "featureSOFTSERIAL": {
        "message": "Enable CPU based serial ports"
    },
    "featureSOFTSERIALTip": {
        "message": "Configure ports on the Ports tab after enabling."
    },
    "featureGPS": {
        "message": "GPS for navigation and telemetry"
    },
    "featureGPSTip": {
        "message": "Configure port scenario first"
    },
    "featureSONAR": {
        "message": "Sonar"
    },
    "featureTELEMETRY": {
        "message": "Telemetry output"
    },
    "featureCURRENT_METER": {
        "message": "Battery current monitoring"
    },
    "feature3D": {
        "message": "3D mode (for use with reversible ESCs)"
    },
    "featureRX_PARALLEL_PWM": {
        "message": "PWM (one wire per channel)"
    },
    "featureRX_MSP": {
        "message": "MSP (control via MSP port)"
    },
    "featureRSSI_ADC": {
        "message": "Analog RSSI input"
    },
    "featureLED_STRIP": {
        "message": "Multi-color RGB LED strip support"
    },
    "featureDISPLAY": {
        "message": "OLED Screen Display"
    },
    "featureDISPLAYTip": {
        "message": "If this feature is enabled, and no display device is connected (or the display device is not powered up), there will be a delay of approx. 10 seconds on every reboot of the flight controller."
    },
    "featureONESHOT125": {
        "message": "ONESHOT ESC support"
    },
    "featureONESHOT125Tip": {
        "message": "Disconnect flight battery and remove props before enabling."
    },
    "featureBLACKBOX": {
        "message": "Blackbox flight data recorder"
    },
    "featureBLACKBOXTip": {
        "message": "Configure via the BlackBox tab after enabling."
    },
    "featureRX_SPI": {
        "message": "SPI Rx (e.g. built-in Rx)"
    },
    "featureESC_SENSOR": {
        "message": "Use KISS/BLHeli_32 ESC telemetry <b>over a separate wire</b>"
    },
    "featureCHANNEL_FORWARDING": {
        "message": "Forward aux channels to servo outputs"
    },
    "featureTRANSPONDER": {
        "message": "Race Transponder"
    },
    "featureTRANSPONDERTip": {
        "message": "Configure via the Race Transponder tab after enabling."
    },
    "featureAIRMODE": {
        "message": "Permanently enable Airmode"
    },
    "featureSUPEREXPO_RATES": {
        "message": "Super Expo Rates"
    },
    "featureSDCARD": {
        "message": "SDCard support (for logging)"
    },
    "featureOSD": {
        "message": "On Screen Display"
    },
    "featureVTX": {
        "message": "Video Transmitter"
    },
    "featureANTI_GRAVITY": {
        "message": "Permanently enable"
    },
    "featureANTI_GRAVITYTip": {
        "message": "If this is disabled, the 'ANTI GRAVITY' mode can be used to enable Anti Gravity with a switch."
    },
    "featureDYNAMIC_FILTER": {
        "message": "Dynamic gyro notch filtering"
    },
    "featureFAILSAFE": {
        "message": "Enable Failsafe Stage 2"
    },
    "featureFAILSAFEOld": {
        "message": "Enable Failsafe"
    },
    "featureFAILSAFETip": {
        "message": "<strong>Note:</strong> When Stage 2 is DISABLED, the fallback setting <strong>Auto</strong> is used instead of the user settings for all flightchannels (Roll, Pitch, Yaw and Throttle)."
    },
    "featureFAILSAFEOldTip": {
        "message": "Apply Failsafe settings on RX signal loss"
    },
    "configurationFeatureEnabled": {
        "message": "Enabled"
    },
    "configurationFeatureName": {
        "message": "Feature"
    },
    "configurationFeatureDescription": {
        "message": "Description"
    },
    "configurationMixer": {
        "message": "Mixer"
    },
    "configurationFeatures": {
        "message": "Other Features"
    },
    "configurationReceiver": {
        "message": "Receiver"
    },
    "configurationReceiverMode": {
        "message": "Receiver Mode"
    },
    "configurationRSSI": {
        "message": "RSSI (Signal Strength)"
    },
    "configurationRSSIHelp": {
        "message": "RSSI is a measurement of signal strength and is very handy so you know when your aircraft is going out of range or if it is suffering RF interference."
    },
    "configurationEscFeatures": {
        "message": "ESC/Motor Features"
    },
    "configurationFeaturesHelp": {
        "message": "<strong>Note:</strong> Not all combinations of features are valid.  When the flight controller firmware detects invalid feature combinations conflicting features will be disabled.<br /><strong>Note:</strong> Configure serial ports <span class=\"message-negative\">before</span> enabling the features that will use the ports."
    },
    "configurationSerialRXHelp": {
        "message": "&#8226; The UART for the receiver must be set to ‘Serial Rx’ (in the <i>Ports</i> tab)<br>&#8226; Select the correct data format from the drop-down, below:"
    },
    "configurationSpiRxHelp": {
        "message": "<strong>Note:</strong> The SPI RX provider will only work if the required hardware is on board or connected to an SPI bus."
    },
    "configurationOtherFeaturesHelp": {
        "message": "<strong>Note:</strong> Not all features are supported by all flight controllers. If you enable a specific feature, and it is disabled after you hit 'Save and Reboot', it means that this feature is not supported on your board."
    },
    "configurationBoardAlignment": {
        "message": "Board and Sensor Alignment"
    },
    "configurationBoardAlignmentRoll": {
        "message": "Roll Degrees"
    },
    "configurationBoardAlignmentPitch": {
        "message": "Pitch Degrees"
    },
    "configurationBoardAlignmentYaw": {
        "message": "Yaw Degrees"
    },
    "configurationSensorAlignmentGyro": {
        "message": "GYRO Alignment"
    },
    "configurationSensorGyroToUse": {
        "message": "GYRO/ACCEL"
    },
    "configurationSensorGyroToUseNotFound": {
        "message": "Warning: No Gyro/Acc found"
    },
    "configurationSensorGyroToUseFirst": {
        "message": "First"
    },
    "configurationSensorGyroToUseSecond": {
        "message": "Second"
    },
    "configurationSensorGyroToUseBoth": {
        "message": "Both"
    },
    "configurationSensorAlignmentGyro1": {
        "message": "First GYRO"
    },
    "configurationSensorAlignmentGyro2": {
        "message": "Second GYRO"
    },
    "configurationSensorAlignmentAcc": {
        "message": "ACCEL Alignment"
    },
    "configurationSensorAlignmentMag": {
        "message": "MAG Alignment"
    },
    "configurationSensorAlignmentDefaultOption": {
       "message": "Default"
    },
    "configurationAccelTrims": {
        "message": "Accelerometer Trim"
    },
    "configurationAccelTrimRoll": {
        "message": "Accelerometer Roll Trim"
    },
    "configurationAccelTrimPitch": {
        "message": "Accelerometer Pitch Trim"
    },
    "configurationArming": {
        "message": "Arming"
    },
    "configurationArmingHelp": {
        "message": "Some Arming options may require accelerometer be enabled"
    },
    "configurationReverseMotorSwitch": {
        "message": "Motor direction is reversed"
    },
       "configurationReverseMotorSwitchHelp": {
        "message": "This option configures the mixer to expect the motor direction to be reversed and the propellers to be on accordingly. <strong>Warning:</strong> This does not reverse the motor direction. Use the configuration tool for your ESCs or switch the ESC - motor wiring order to achieve this. Also, make sure to check with propellers off that your motors are rotating in the directions shown in the diagram above before attempting to arm."
    },
    "configurationAutoDisarmDelay": {
        "message": "Disarm motors after set delay [seconds] (Requires MOTOR_STOP feature)"
    },
    "configurationDisarmKillSwitch": {
        "message": "Disarm motors regardless of throttle value (When ARM is configured in Modes tab via AUX channel)"
    },
    "configurationDisarmKillSwitchHelp": {
        "message": "Arming is always disabled when the throttle is not low. Be careful as you could disarm accidentally with a switch while flying with this option active."
    },
    "configurationDigitalIdlePercent": {
        "message": "Motor Idle ( %, static)"
    },
    "configurationDigitalIdlePercentDisabled": {
        "message": "Dynamic Idle is active at {{dynamicIdle}} rpm. See the PID tuning tab."
    },
    "configurationDigitalIdlePercentHelp": {
        "message": "The 'Motor Idle (static)' value is the percent of maximum throttle that is sent to the ESCs when the throttle at minimum stick position and the craft is armed. <br><br>Increase it to gain more idle speed and avoid desyncs. Too high and the craft feels floaty. Too low and the motors can desync or be slow to start up.<br><br>In 4.3, when Dynamic Idle is active, the static idle value is disregarded, because the idle value is continually adjusted to maintain the configured minimum rpm on the slowest motor."
    },
    "configurationMotorPoles": {
        "message": "Motor poles",
        "description": "One of the fields of the ESC/Motor configuration"
    },
    "configurationMotorPolesLong": {
        "message": "$t(configurationMotorPoles.message) (number of magnets on the motor bell)",
        "description": "One of the fields of the ESC/Motor configuration"
    },
    "configurationMotorPolesHelp": {
        "message": "The pole count is the number of magnets on the bell of the motor. Do NOT count the stators where the windings are located. 5\" motors usually have 14 magnets, 3\" or smaller often have 12 magnets.",
        "description": "Help text for the Motor poles field of the ESC/Motor configuration"
    },
    "configurationThrottleMinimum": {
        "message": "Minimum Throttle (Lowest ESC value when armed)"
    },
    "configurationThrottleMinimumHelp": {
        "message": "This is the 'idle' value that is sent to the ESCs when the craft is armed and the trottle stick is at minimum position. Increase the value to gain more idle speed. Also raise the value in case of desyncs!"
    },
    "configurationThrottleMaximum": {
        "message": "Maximum Throttle (Highest ESC value when armed)"
    },
    "configurationThrottleMinimumCommand": {
        "message": "Minimum Command (ESC value when disarmed)"
    },
    "configurationThrottleMinimumCommandHelp": {
        "message": "This is the value that is sent to the ESCs when the craft is disarmed. Set this to a value that has the motors stopped (1000 for most ESCs)."
    },
    "configurationEscProtocolDisabled": {
        "message": "Please select a motor output protocol appropriate for your ESCs. $t(escProtocolDisabledMessage.message)"
    },
    "escProtocolDisabledMessage": {
        "message": "<strong>Caution:</strong> Selecting a motor output protocol that is not supported by your ESCs can lead to the <strong>ESCs spinning up as soon as a battery is connected</strong>. For this reason, <strong>always make sure to remove the props before connecting a battery for the first time after changing the motor output protocol</strong>."
    },
    "configurationDshotBeeper": {
        "message": "Dshot Beacon Configuration"
    },
    "configurationUseDshotBeeper": {
        "message": "Use Dshot beacon (use motors to sound beeps when disarmed)"
    },
    "configurationDshotBeaconTone": {
        "message": "Beacon Tone"
    },
    "configurationDshotBeaconHelp": {
        "message": "The Dshot beacon uses the ESCs and motors to produce sound. This means that the Dshot beacon cannot be used when the motors are spinning. In Betaflight 3.4 and newer, when arming is attempted while the Dshot beacon is active, there is a 2 second delay after the last Dshot beacon tone before the craft is armed. This is to prevent the Dshot beacon functionality from interfering with the Dshot commands sent when arming.<br/><strong>Warning:</strong> Since the Dshot beacon is running current through your motors when active, this can result in excessive heat production and damage to your motors and / or ESCs if the beacon strength is set too high. Use BLHeli Configurator or the BLHeli Suite to adjust and test the beacon strength."
    },
    "configurationBeeper": {
        "message": "Beeper Configuration"
    },
    "beeperGYRO_CALIBRATED": {
        "message": "Beeps when gyro has been calibrated"
    },
    "beeperRX_LOST": {
        "message": "Beeps when TX is turned off or signal lost (repeat until TX is okay)"
    },
    "beeperRX_LOST_LANDING": {
        "message": "Beeps SOS when armed and TX is turned off or signal lost (autolanding/autodisarm)"
    },
    "beeperDISARMING": {
        "message": "Beep when disarming the flightcontroller"
    },
    "beeperARMING": {
        "message": "Beep when arming the flightcontroller"
    },
    "beeperARMING_GPS_FIX": {
        "message": "Beep a special tone when arming the board and GPS has fix"
    },
    "beeperBAT_CRIT_LOW": {
        "message": "Longer warning beeps when battery is critically low (repeats)"
    },
    "beeperBAT_LOW": {
        "message": "Warning beeps when battery is getting low (repeats)"
    },
    "beeperGPS_STATUS": {
        "message": "Use the number of beeps to indicate how many GPS satellites were found"
    },
    "beeperRX_SET": {
        "message": "Beeps when aux channel is set for beep"
    },
    "beeperACC_CALIBRATION": {
        "message": "Accelerometer inflight calibration completed confirmation"
    },
    "beeperACC_CALIBRATION_FAIL": {
        "message": "Accelerometer inflight calibration failed"
    },
    "beeperREADY_BEEP": {
        "message": "Ring a tone when GPS is locked and ready"
    },
    "beeperMULTI_BEEPS": {
        "message": ""
    },
    "beeperDISARM_REPEAT": {
        "message": "Beeps sounded while stick held in disarm position"
    },
    "beeperARMED": {
        "message": "Warning beeps when board is armed with motors off when idle (repeats until board is disarmed or throttle is increased)"
    },
    "beeperSYSTEM_INIT": {
        "message": "Initialisation beeps when board is powered on"
    },
    "beeperUSB": {
        "message": "Beep when flight controller is powered from USB. Turn this off if you don't want the beeper to be on when on the workbench"
    },
    "beeperBLACKBOX_ERASE": {
        "message": "Beep when blackbox erase completes"
    },
    "beeperCRASH_FLIP": {
        "message": "Beep when crash flip mode is active"
    },
    "beeperCAM_CONNECTION_OPEN": {
        "message": "Beep when the 5 key camera control is entered"
    },
    "beeperCAM_CONNECTION_CLOSE": {
        "message": "Beep when the 5 key camera control is exited"
    },
    "beeperRC_SMOOTHING_INIT_FAIL": {
        "message": "Beep when armed and rc smoothing has not initialized filters"
    },
    "configuration3d": {
        "message": "3D ESC/Motor Features"
    },
    "configuration3dDeadbandLow": {
        "message": "3D Deadband Low"
    },
    "configuration3dDeadbandHigh": {
        "message": "3D Deadband High"
    },
    "configuration3dNeutral": {
        "message": "3D Neutral"
    },
    "configuration3dDeadbandThrottle": {
        "message": "3D Deadband Throttle"
    },
    "configurationSystem": {
        "message": "System configuration"
    },
    "configurationLoopTime": {
        "message": "Flight Controller Loop Time"
    },
    "configurationCalculatedCyclesSec": {
        "message": "Cycles/Sec [Hz]"
    },
    "configurationSpeedGyroNoGyro": {
        "message": "No gyro",
        "description": "When no gyro is configured this appears in place of the speed of the gyro in kHz"
    },
    "configurationSpeedPidNoGyro": {
        "message": "Gyro / {{value}}",
        "description": "When no gyro is configured this appears in place of the speed of the PID in kHz. Try to keep it short."
    },
    "configurationKHzUnitLabel": {
        "message": "{{value}} kHz",
        "description": "Value for some options that show the speed of gyro, pid, etc. in kHz"
    },
    "configurationLoopTimeHelp": {
        "message": "<strong>Note:</strong> Make sure your FC is able to operate at these speeds! Check CPU and cycletime stability. Changing this may require PID re-tuning. TIP: Disable Accelerometer and other sensors to gain more performance."
    },
    "configurationGPS": {
        "message": "GPS"
    },
    "configurationGPSProtocol": {
        "message": "Protocol"
    },
    "configurationGPSBaudrate": {
        "message": "Baudrate"
    },
    "configurationGPSubxSbas": {
        "message": "Ground Assistance Type"
    },
    "configurationGPSAutoBaud": {
        "message": "Auto Baud"
    },
    "configurationGPSAutoConfig": {
        "message": "Auto Config"
    },
    "configurationGPSGalileo": {
        "message": "Use Galileo",
        "description": "Option to use Galileo in the GPS configuration"
    },
    "configurationGPSGalileoHelp": {
        "message": "When enabled, the GPS module will also track the Galileo satellite system, usually resulting in more locked satellites. On Betaflight 4.2.x or earlier, it also disables the QZSS augmentation system.",
        "description": "Help text for the option to use Galileo in the GPS configuration"
    },
    "configurationGPSHomeOnce": {
        "message": "Set Home Point Once",
        "description": "Option to set the Home Point with the first arm only, not with each arm in the GPS Configuration"
    },
    "configurationGPSHomeOnceHelp": {
        "message": "When enabled, only the first arm after the battery is connected will be used as home point. If not enabled, every time the quad is armed, the home point will be updated.",
        "description": "Help text for the option to set the Home Point with the first arm only, not with each arm in the GPS Configuration"
    },
    "configurationGPSHelp": {
        "message": "<strong>Note:</strong> Remember to configure a Serial Port (via Ports tab) when using GPS feature."
    },
    "configurationSerialRX": {
        "message": "Serial Receiver Provider"
    },
    "configurationSpiRX": {
        "message": "SPI Bus Receiver Provider"
    },
    "configurationEepromSaved": {
        "message": "EEPROM <span class=\"message-positive\">saved</span>"
    },
    "configurationButtonSave": {
        "message": "Save and Reboot"
    },
    "dialogDynFiltersChangeTitle": {
        "message": "Dynamic Notch values change"
    },
    "dialogDynFiltersChangeNote": {
        "message": "<span class=\"message-negative\"><b>WARNING: This change will enable/disable RPM filtering, increasing/decreasing filter delay/effectiveness.</b></span><br><br>Reset the dynamic notch filters to recommended values?"
    },
    "portsIdentifier": {
        "message": "Identifier"
    },
    "portsConfiguration": {
        "message": "Configuration/MSP"
    },
    "portsSerialRx": {
        "message": "Serial Rx"
    },
    "portsSensorIn": {
        "message": "Sensor Input"
    },
    "portsTelemetryOut": {
        "message": "Telemetry Output"
    },
    "portsPeripherals": {
        "message": "Peripherals"
    },
    "portsHelp": {
        "message": "<strong>Note:</strong> not all combinations are valid.  When the flight controller firmware detects this the serial port configuration will be reset."
    },
    "portsVtxTableNotSet": {
        "message": "<span class=\"message-negative\">WARNING:</span> The VTX table has not been set up correctly and without it VTX control will not be possible. Please set up the VTX table in $t(tabVtx.message) tab."
    },
    "portsMSPHelp": {
        "message": "<strong>Note:</strong> Do <span class=\"message-negative\">NOT</span> disable MSP on the first serial port unless you know what you are doing.  You may have to reflash and erase your configuration if you do."
    },
    "portsFirmwareUpgradeRequired": {
        "message": "Firmware upgrade <span class=\"message-negative\">required</span>.  Serial port configurations of firmware &lt; 1.8.0 is not supported."
    },
    "portsButtonSave": {
        "message": "Save and Reboot"
    },
    "portsTelemetryDisabled": {
        "message": "Disabled"
    },
    "portsFunction_MSP": {
        "message": "MSP"
    },
    "portsFunction_GPS": {
        "message": "GPS"
    },
    "portsFunction_TELEMETRY_FRSKY": {
        "message": "FrSky"
    },
    "portsFunction_TELEMETRY_HOTT": {
        "message": "HoTT"
    },
    "portsFunction_TELEMETRY_LTM": {
        "message": "LTM"
    },
    "portsFunction_TELEMETRY_MAVLINK": {
        "message": "MAVLink"
    },
    "portsFunction_TELEMETRY_MSP": {
        "message": "MSP"
    },
    "portsFunction_TELEMETRY_SMARTPORT": {
        "message": "SmartPort"
    },
    "portsFunction_TELEMETRY_IBUS": {
        "message": "iBUS"
    },
    "portsFunction_TELEMETRY_JETIXBUS": {
        "message": "JETIXBUS"
    },
    "portsFunction_TELEMETRY_CRSF": {
        "message": "CRSF"
    },
    "portsFunction_TELEMETRY_SRXL": {
        "message": "SRXL"
    },
    "portsFunction_ESC_SENSOR": {
        "message": "ESC"
    },
    "portsFunction_RX_SERIAL": {
        "message": "Serial RX"
    },
    "portsFunction_BLACKBOX": {
        "message": "Blackbox logging"
    },
    "portsFunction_TBS_SMARTAUDIO": {
        "message": "VTX (TBS SmartAudio)"
    },
    "portsFunction_IRC_TRAMP": {
        "message": "VTX (IRC Tramp)"
    },
    "portsFunction_RUNCAM_DEVICE_CONTROL": {
        "message": "Camera (RunCam Protocol)"
    },
    "portsFunction_FRSKY_OSD": {
        "message": "OSD (FrSky Protocol)"
    },
    "pidTuningProfileOption": {
        "message": "Profile $1"
    },
    "pidTuningRateProfileOption": {
        "message": "Rateprofile $1"
    },
    "portsFunction_LIDAR_TF": {
        "message": "Benewake LIDAR"
    },
    "pidTuningUpgradeFirmwareToChangePidController": {
        "message": "<span class=\"message-negative\">Changing PID controller disabled - you can change it via the CLI.</span>  You have firmware with API version <span class=\"message-negative\">$1</span>, but this functionality requires <span class=\"message-positive\">$2</span>."
    },
    "pidTuningSubTabPid": {
        "message": "PID Profile Settings"
    },
    "pidTuningSubTabRates": {
        "message": "Rateprofile Settings"
    },
    "pidTuningSubTabFilter": {
        "message": "Filter Settings"
    },
    "pidTuningShowAllPids": {
        "message": "Show all PIDs"
    },
    "pidTuningHideUnusedPids": {
        "message": "Hide unused PIDs"
    },
    "pidTuningNonProfilePidSettings": {
        "message": "Profile independent PID Controller Settings"
    },

    "pidTuningAntiGravity": {
        "message": "Anti Gravity"
    },
    "pidTuningAntiGravityMode": {
        "message": "Mode",
        "description": "Anti Gravity mode selection parameter"
    },
    "pidTuningAntiGravityModeOptionSmooth": {
        "message": "Smooth",
        "description": "One of the modes of anti gravity"
    },
    "pidTuningAntiGravityModeOptionStep": {
        "message": "Step",
        "description": "One of the modes of anti gravity"
    },
    "pidTuningAntiGravityGain": {
        "message": "Gain",
        "description": "Anti Gravity Gain Parameter"
    },
    "pidTuningAntiGravityThres": {
        "message": "Threshold",
        "description": "Anti Gravity Threshold Parameter"
    },
    "pidTuningAntiGravityHelp": {
        "message": "Anti Gravity boosts I (and, in 4.3, P) during and shortly after fast throttle changes, increasing attitude stability during throttle pumps.<br><br>Higher gain values may improve stability on low authority machines or those with an offset centre of gravity."
    },
    "pidTuningDMin": {
        "message": "<b>D</b>erivative",
        "description": "Table header of the D Min feature in the PIDs tab"
    },
    "pidTuningDMinDisabledNote": {
        "message": "<strong>Note:</strong> D Max feature is disabled and its parameters are hidden. To use D Max please enable it in $t(pidTuningPidSettings.message)."
    },
    "pidTuningDMinFeatureTitle": {
        "message": "Dynamic Damping / D Max settings",
        "description": "Title for the options panel for the D Max feature"
    },
    "pidTuningDMaxSettingTitle": {
        "message": "Dynamic<br>Damping",
        "description": "Sidebar title for the options panel for the D Max feature"
    },
    "pidTuningDMinGain": {
        "message": "Gain",
        "description": "Gain of the D Max feature"
    },
    "pidTuningDMaxGainHelp": {
        "message": "D Max Gain increases the sensitivity of the system that increases D  when the quad turns quickly or is shaking in propwash.<br><br>Higher Gain values bring D up more readily than lower values, lifting D towards D Max more quickly.  Values of 40 or even 50 may work well for clean Freestyle builds.<br><br>Lower values will not raise D towards DMax except in really fast moves, and may suit race setups better by minimising D lag.<br><br>WARNING: Either Gain, or Advance, must be set above about 20, or D will not increase as it should. Setting both to zero will lock D at the base value.",
        "description": "D Max feature helpicon message"
    },
    "pidTuningDMinAdvance": {
        "message": "Advance",
        "description": "Advance of the D Max feature"
    },
    "pidTuningDMaxAdvanceHelp": {
        "message": "D Max Advance adds sensitivity to the Gain factor when the sticks are moved quickly.<br><br>Advance does not respond to gyro or propwash. It acts earlier than the Gain factor and is occasionally useful for low authority quads that tend to lag badly at the start of a move.<br><br>Generally it is best left at zero.<br><br>WARNING: Either Advance, or Gain, must be set above about 20, or D will not increase as it should. Setting both to zero will lock D at the base value.",
        "description": "D Max feature helpicon message"
    },
    "pidTuningDMinFeatureHelp": {
        "message": "D Max increases D during quicker gyro and/or stick movements.<br><br>The 'Gain' factor increases D when the quad turns quickly or is shaking in propwash. Usually only 'Gain' is needed. <br><br>The 'Advance' factor increases D towards D Max during stick inputs. Usually it is not needed and should be set to zero.  Advance can be useful for low authority quads that tend to overshoot heavily.<br><br>Higher Gain values (eg 40) may be more suitable for freestyle by lifting D more readily.<br><br>WARNING: One of Gain or Advance must be set above about 20 or D will not increase as it should. Setting both to zero will lock D at the base value.",
        "description": "D Max feature helpicon message"
    },
    "pidTuningDMinHelp": {
        "message": "Baseline damping of ANY motion of the craft. <br /><br />Opposes movement whether caused by stick inputs or external influences (e.g. prop-wash or wind gusts)<br /><br />Higher D Min gains provide more stability and reduce overshoot.<br /><br />D amplifies noise (magnifies by 10x to 100x).  This can burn out motors if gains are too high or D isn't filtered well.<br /><br />D-term is a bit like the shock absorber on your car.",
        "description": "Derivative helpicon message on PID table titlebar"
    },
    "pidTuningPidSettings": {
        "message": "PID Controller Settings"
    },
    "pidTuningMotorSettings": {
        "message": "Throttle and Motor Settings"
    },
    "pidTuningMiscSettings": {
        "message": "Miscellaneous Settings"
    },
    "receiverRcSmoothing": {
        "message": "RC Smoothing"
    },
    "receiverRcSmoothingAuto": {
        "message": "Auto"
    },
    "receiverRcSmoothingManual": {
        "message": "Manual"
    },
    "receiverRcSmoothingAutoFactor": {
        "message": "Auto Factor",
        "description": "Auto Factor parameter for RC smoothing"
    },
    "receiverRcSmoothingAutoFactorHelp": {
        "message": "Adjusts the Auto factor calculation, 10 is the default factor to delay ratio. Increasing the number will smooth RC inputs more, while also adding delay. This may be useful for unreliable RC connections or for cinematic flying.<br>Be careful with numbers approaching 50, input delay will become noticeable.<br>Use the CLI command rc_smoothing_info while TX and RX are powered to see the automatically calculated RC smoothing cutoffs.",
        "description": "Auto Factor parameter help message"
    },
    "receiverRcSmoothingAutoFactorHelp2": {
        "message": "Adjusts auto RC smoothing. 30 is the default. Higher values smooth RC inputs more - e.g. 60 for HD freestyle or 90-120 for cinematic flying. Note: Values over 50 will cause appreciable stick delay. Lower values, eg 20-25, will transfer some of the RC control steps into the motor signals, slightly increasing motor heat, but will reduce RC delay slightly. This may be useful for racing.",
        "description": "Auto Factor parameter help message"
    },
    "receiverRcFeedforwardTypeSelect": {
        "message": "Feedforward Cutoff Type"
    },
    "receiverRcSetpointTypeSelect": {
        "message": "Setpoint Cutoff Type"
    },
    "receiverRcSmoothingInterpolation": {
        "message": "Interpolation"
    },
    "receiverRcSmoothingFilter": {
        "message": "Filter"
    },
    "receiverRcSmoothingTypeHelp": {
        "message": "Type of RC smoothing used"
    },
    "rcSmoothingSetpointCutoffHelp": {
        "message": "The cutoff frequency in Hz used by the setpoint filter. Using lower values will result in smoother inputs and are more appropriate for slower receiver protocols. Most users should leave this at 0 corresponding to \"Auto\"."
    },
    "rcSmoothingFeedforwardCutoffHelp": {
        "message": "The cutoff frequency in Hz used by the feedforward filter. Using lower values will result in smoother inputs and are more appropriate for slower receiver protocols. Most users should leave this at 0 corresponding to \"Auto\"."
    },
    "rcSmoothingChannelsSmoothedHelp": {
        "message": "The channels smoothing applies to"
    },
    "rcSmoothingFeedforwardTypeHelp": {
        "message": "The type of filtering method used for the feedforward. Starting with 4.2 the default value of \"Auto\" is recommended. For 4.1 and earlier most users should use the default \"BIQUAD\" value as it provides a good balance between smoothness and delay. \"PT1\" reduces the delay slightly but provides less smoothing."
    },
    "rcSmoothingSetpointTypeHelp": {
        "message": "The type of filtering method used for the setpoint. Most users should use the default \"BIQUAD\" value as it provides a good balance between smoothness and delay. \"PT1\" reduces the delay slightly but provides less smoothing."
    },
    "receiverRcSmoothingSetpointManual": {
        "message": "Selects whether the setpoint filter cutoff frequency is automatically calculated (recommended) or manually selected by the user. Using \"Manual\" is not recommended for receiver protocols like Crossfire which can change in flight."
    },
    "receiverRcSmoothingFeedforwardManual": {
        "message": "Selects whether the feedforward filter cutoff frequency is automatically calculated (recommended) or manually selected by the user. Using \"Manual\" is not recommended for receiver protocols like Crossfire which can change in flight."
    },
    "receiverRcSmoothingSetpointHz": {
        "message": "Setpoint Cutoff Frequency"
    },
    "receiverRcSmoothingFeedforwardCutoff": {
        "message": "Feedforward Cutoff Frequency"
    },
    "receiverRcSetpointType": {
        "message": "Setpoint Filter Type"
    },
    "receiverRcFeedforwardType": {
        "message": "Feedforward Filter Type"
    },
    "receiverRcSmoothingFeedforwardTypeOff": {
        "message": "Off"
    },
    "receiverRcSmoothingFeedforwardTypeAuto": {
        "message": "Auto"
    },
    "receiverRcSmoothingChannel": {
        "message": "Channels Smoothed"
    },
    "receiverRcInterpolation": {
        "message": "RC Interpolation"
    },
    "receiverRcInterpolationHelp": {
        "message": "RC TX/RX systems are not as fast as PID loops. That means that PID loop has gaps in the information stream from RC systems. This option enables interpolation of the RC input during the times when no RC frames are received. The option also offers cleaner P and D behaviour as there are no ramps in control input."
    },
    "receiverRcInterpolationIntervalHelp": {
        "message": "Interpolation interval for manual RC interpolation mode in milliseconds"
    },
    "receiverRcInterpolationOff": {
        "message": "Off"
    },
    "receiverRcSmoothingType": {
        "message": "Smoothing Type"
    },
    "receiverRcInterpolationDefault": {
        "message": "Preset"
    },
    "receiverRcInterpolationAuto": {
        "message": "Auto"
    },
    "receiverRcInterpolationManual": {
        "message": "Manual"
    },
    "receiverRcInterpolationInterval": {
        "message": "RC Interpolation Interval [ms]"
    },
    "receiverRcSmoothingMode": {
        "message": "Smoothing Mode"
    },
    "pidTuningDtermSetpointTransition": {
        "message": "D Setpoint transition"
    },
    "pidTuningDtermSetpoint": {
        "message": "D Setpoint Weight"
    },
    "pidTuningDtermSetpointTransitionHelp": {
        "message": "With this parameter, D Setpoint Weight can be reduced near the center of the sticks, which results in smoother end of flips and rolls.<br> The value represents a point of stick deflection: 0 - stick centered, 1 - full deflection. When the stick is above that point, Setpoint Weight is kept constant at its configured value. When the stick is positioned below that point, Setpoint Weight is reduced proportionally, reaching 0 at the stick center position.<br>Value of 1 gives maximum smoothing effect, while value of 0 keeps the Setpoint Weight fixed at its configured value over the whole stick range."
    },
    "pidTuningDtermSetpointHelp": {
        "message": "This parameter determines the stick accelerating effect within derivative component.<br> Value of 0 equals to old Measuemenent method where D only tracks gyro, while value of 1 equals to old Error method with equal gyro and stick tracking ratio.<br> Lower value equals to slower/smoother stick response, while higher value provides more stick acceleration response.<br>Note that RC interpolation is recommended to be enabled with higher values to prevent control kicks making noise."
    },
    "pidTuningDtermSetpointTransitionWarning": {
        "message": "<span class=\"message-negative\"><strong>$t(warningTitle.message):<\/strong> The use of a D Setpoint transition greater than 0 and less than 0.1 is highly discouraged. Doing so may lead instability and reduced stick responsiveness as the sticks cross the centre point.<\/span>"
    },
    "pidTuningFeedforwardGroup": {
        "message": "Feed-<br>forward"
    },
    "pidTuningFeedforwardGroupHelp": {
        "message": "Feedforward adjusts stick responsiveness.<br /><br /> These options let you adjust it to provide anything from crisp, immediate stick responses for racing, or soft smooth responses for cinematic / HD purposes."
    },
    "pidTuningFeedforwardJitter": {
        "message": "Jitter Reduction"
    },
    "pidTuningFeedforwardJitterHelp": {
        "message": "Jitter Reduction reduces Feedforward when the sticks move slowly, regardless of their position.<br><br>This allows smooth, jitter-free flight when making smooth slow arcs, yet provides full feedforward without any delay when the sticks are moved quickly. Transition is not required, and should be set to zero, when jitter reduction is active.<br><br>Default is 7. Higher values, eg 10-12, are good for cinematic or HD freestyle purposes, 5 may be better for racing with fast RC links."
    },
    "pidTuningFeedforwardSmoothFactor": {
        "message": "Smoothness"
    },
    "pidTuningFeedforwardSmoothnessHelp": {
        "message": "Feedforward smoothing is essential to attenuate noise in the feedforward trace.<br><br>The smallest value that gives a smooth trace is best.<br><br>The default of 25 is good for 50-150hz RC links. For 250hz RC links, use 40-50.  For 500hz links, use 60-65."
    },
    "pidTuningFeedforwardAveraging": {
        "message": "Averaging"
    },
    "pidTuningFeedforwardAveragingHelp": {
        "message": "Feedforward Averaging takes the average of the last 2 or 3 feedforward steps.  This smooths the feedforward trace, but adds some delay.<br><br>It is most effective when there is sequential up/down jitter in the signal, which is common with faster RC links.<br><br>2 point averaging is needed for 500hz links and noisy 250hz links, or for Cinematic / HD flying. Crossfire (before CRSFShot) needs 3 point averaging in 150hz mode."
    },
    "pidTuningOptionOff": {
        "message": "OFF"
    },
    "pidTuningOptionOn": {
        "message": "ON"
    },
    "pidTuningFeedforwardAveragingOption2Point": {
        "message": "2 Point"
    },
    "pidTuningFeedforwardAveragingOption3Point": {
        "message": "3 Point"
    },
    "pidTuningFeedforwardAveragingOption4Point": {
        "message": "4 Point"
    },
    "pidTuningFeedforwardBoost": {
        "message": "Boost"
    },
    "pidTuningFeedforwardBoostHelp": {
        "message": "Feedforward boost adds extra push in response to stick acceleration or deceleration.<br><br>This minimises the gyro lag that is caused by motor acceleration delay, and reduces overshoot when the sticks decelerate by pulling back hard on the motors.<br><br>Default boost works for most setups. Race pilots may prefer to increase it a little bit. Boost can be fine-tuned with careful log analysis."
    },
    "pidTuningFeedforwardMaxRateLimit": {
        "message": "Max Rate Limit"
    },
    "pidTuningFeedforwardMaxRateLimitHelp": {
        "message": "Cuts feedforward as the sticks move towards maximum deflection, to minimise overshoot at the start of a flip or roll.<br><br>Does nothing at the end of a flip or roll. Lower values make the attenuation start earlier.<br><br>Usually this value does not require modification. The highest value consistent with acceptable overshoot at the start of rolls or flips is best."
    },
    "pidTuningFeedforwardTransition": {
        "message": "Transition"
    },
    "pidTuningFeedforwardTransitionHelp": {
        "message": "Linearly reduces Feedforward when sticks are close to the centre. <br><br>In 4.2 and earlier, transition can be used to provide smoother stick responses around centre stick position.<br><br>In 4.3, transition is not recommended, as it has been 'replaced' by the jitter reduction function.<br><br>A value of 0 disables transition.  A value of 0.3 cuts feedforward to zero when sticks are at dead centre, but it increases to full normal when sticks are >30% out from centre."
    },
    "pidTuningProportional": {
        "message": "<b>P</b>roportional"
    },
    "pidTuningProportionalHelp": {
        "message": "How tightly the machine tracks the sticks (the Setpoint).<br /><br />Higher value (gains) provide tighter tracking, but can cause overshoot if too high in relation to D, and can cause oscillations in high throttle turns.  Think of P as the spring on a car.",
        "description": "Proportional Term helpicon message on PID table titlebar"
    },
    "pidTuningIntegral": {
        "message": "<b>I</b>ntegral"
    },
    "pidTuningIntegralHelp": {
        "message": "Controls persisting small offsets.<br><br>Similar to P, but accumulates progressively and slowly until error is zero.  Important for longer-term biases such as an offset center of gravity, or persistent outside influences like wind.<br /><br />Higher gains provide tighter tracking, especially in turns, but can make the craft feel stiff.<br><br>Can cause slow oscillations in low authority builds or if high in proportion to P.",
        "description": "Integral Term helpicon message on PID table titlebar"
    },
    "pidTuningDerivative": {
        "message": "Derivative"
    },
    "pidTuningDMax": {
        "message": "<b>D</b> Max"
    },
    "pidTuningDMaxHelp": {
        "message": "Provides stronger damping for quick maneuvers that might otherwise cause overshoot. <br><br>Allows a lower basic D min value than usual, keeping motors cooler, and turn-in faster, but lifts D to control overshoot in flips or fast reversals. <br><br>Most useful for racers, noisy builds or low authority machines.",
        "description": "D Max Term helpicon message on PID table titlebar"
    },
    "pidTuningDerivativeHelp": {
        "message": "Controls the strength of dampening to ANY motion on the craft.  For stick moves, the D-term dampens the command. For an outside influence (prop wash OR wind gust) the D-term dampens the influence.<br><br>Higher gains provide more dampening and reduce overshoot by P-term and FF.<br>However, the D-term is VERY sensitive to gyro high frequency vibrations (noise | magnifies by 10x to 100x).<br><br>High frequency noise can cause motor heat and burn out motors if D-gains are too high or the gyro noise is not filtered well (see Filters tab).<br><br>Think of the D-term as the shock absorber on your car, but with the negative inherent property of magnifying high frequency gyro noise.",
        "description": "Derivative Term helpicon message on PID table titlebar"
    },
    "pidTuningFeedforward": {
        "message": "<b>F</b>eedforward"
    },
    "pidTuningFeedforwardHelp": {
        "message": "An additional drive factor, derived purely from stick input, that helps push the craft quickly into fast stick moves.<br><br>FF cannot cause oscillation, allows a lower P for similar stick responses, and offsets the natural opposition of D to sick inputs.<br><br>Low or zero values will result in a smoother but more delayed response to stick inputs.",
        "description": "Feedforward Term helpicon message on PID table titlebar"
    },
    "pidTuningMaxRateWarning": {
        "message": "<span class=\"message-negative\"><b>Warning:</b></span> very high rates can result in desyncs from rapid decelerations."
    },
    "pidTuningRcRate": {
        "message": "RC Rate"
    },
    "pidTuningMaxVel": {
        "message": "Max Vel [deg/s]"
    },
    "pidTuningRate": {
        "message": "Rate"
    },
    "pidTuningSuperRate": {
        "message": "Super Rate"
    },
    "pidTuningRatesPreview": {
        "message": "Rates Preview"
    },
    "pidTuningRatesTuningHelp": {
        "message": "<b>Rates and Expo</b>: Determine your stick feel based on these parameters. Use the graph and live 3D model to find your favourite rate setting."
    },
    "pidTuningRcExpo": {
        "message": "RC Expo"
    },
    "pidTuningTPA": {
        "message": "TPA"
    },
    "pidTuningTPABreakPoint": {
        "message": "TPA Breakpoint"
    },
    "pidTuningThrottleCurvePreview": {
        "message": "Throttle Curve Preview"
    },
    "pidTuningThrottleLimitType": {
        "message": "Throttle Limit"
    },
    "pidTuningThrottleLimitPercent": {
        "message": "Throttle Limit %"
    },
    "pidTuningThrottleLimitTypeOff": {
        "message": "OFF"
    },
    "pidTuningThrottleLimitTypeScale": {
        "message": "SCALE"
    },
    "pidTuningThrottleLimitTypeClip": {
        "message": "CLIP"
    },
    "pidTuningThrottleLimitTypeTip": {
        "message": "Select the type of throttle limiting. <b>OFF</b> disables the feature, <b>SCALE</b> will transform the throttle range from 0 to the selected percentage using the full stick travel, <b>CLIP</b> will set a max throttle percentage and stick travel above that will have no additional effect"
    },
    "pidTuningThrottleLimitPercentTip": {
        "message": "Set the desired throttle limit percentage. Setting to 100% disables the feature."
    },
    "pidTuningFilter": {
        "message": "Filter"
    },
    "pidTuningFilterFrequency": {
        "message": "Frequency"
    },
    "pidTuningRatesCurve": {
        "message": "Rates Preview"
    },
    "throttle": {
        "message": "Throttle"
    },
    "pidTuningButtonSave": {
        "message": "Save"
    },
    "pidTuningButtonRefresh": {
        "message": "Refresh"
    },
    "pidTuningProfileHead": {
        "message": "Profile"
    },
    "pidTuningControllerHead": {
        "message": "PID Controller"
    },
    "pidTuningCopyProfile": {
        "message": "Copy profile"
    },
    "pidTuningCopyRateProfile": {
        "message": "Copy rateprofile"
    },
    "dialogCopyProfileText": {
        "message": "Copy values from current profile to"
    },
    "dialogCopyRateProfileText": {
        "message": "Copy values from current rateprofile to"
    },
    "dialogCopyProfileTitle": {
        "message": "Copy Profile Values"
    },
    "dialogCopyProfileNote": {
        "message": "All values on the destination profile will be wiped and overwritten"
    },
    "dialogCopyProfileConfirm": {
        "message": "Copy"
    },
    "dialogCopyProfileClose": {
        "message": "Cancel"
    },
    "pidTuningResetPidProfile": {
        "message": "Reset this Profile"
    },
    "pidTuningPidProfileReset": {
        "message": "Loaded default values for the current PID profile."
    },
    "pidTuningReceivedProfile": {
        "message": "Flight controller set Profile: <strong class=\"message-positive\">$1</strong>"
    },
    "pidTuningReceivedRateProfile": {
        "message": "Flight controller set Rateprofile: <strong class=\"message-positive\">$1</strong>"
    },
    "pidTuningLoadedProfile": {
        "message": "Loaded Profile: <strong class=\"message-positive\">$1</strong>"
    },
    "pidTuningLoadedRateProfile": {
        "message": "Loaded Rateprofile: <strong class=\"message-positive\">$1</strong>"
    },
    "pidTuningDataRefreshed": {
        "message": "PID data <strong>refreshed</strong>"
    },
    "pidTuningEepromSaved": {
        "message": "EEPROM <span class=\"message-positive\">saved</span>"
    },

    "tuningHelp": {
        "message": "<b>Tuning tips</b><br /><span class=\"message-negative\">IMPORTANT:</span> It is important to verify motor temperatures during first flights. The higher the filter value gets the better it may fly, but you also will get more noise into the motors. <br>Default value of 100Hz is optimal, but for noiser setups you can try lowering Dterm filter to 50Hz and possibly also the gyro filter."
    },
    "tuningHelpSliders": {
        "message": "Use the sliders to adjust your filters. Sliders must be switched off to make manual changes.<br>Moving sliders to the right gives higher cutoff values and may improve propwash, but will allow more noise through to the motors, making them hotter.<br>Most clean builds with rpm filtering will be OK with the gyro lowpass slider hard right, or with only lowpass 2 active and the sliders in the middle.<br><strong>WARNING:</strong> Be VERY cautious when moving D sliders to the right! Check motor temperature after each change!<br><strong>Note:</strong> Changing profiles will only change the D-term filter settings. Gyro filter settings are the same for all profiles.",
        "description": "Filter tuning subtab note"
    },
    "filterWarning": {
        "message": "<span class=\"message-negative\"><b>Warning:</b></span> The amount of filtering you are using is dangerously low. This is likely to make the craft hard to control, and can result in flyaways. It is highly recommended that you <b>enable at least one of Gyro Dynamic Lowpass or Gyro Lowpass 1 and at least one of D-Term Dynamic Lowpass or D Term Lowpass 1</b>."
    },
    "pidTuningSliderPidsMode": {
        "message": "Mode:",
        "description": "Pidtuning slider mode can be OFF, RP or RPY"
    },
    "pidTuningSliderModeHelp": {
        "message": "<strong>Pid Tuning Slider Mode</strong><br><br>Pidtuning slider mode can be:<br><br>&bull; OFF - no sliders, enter values manually<br>&bull; RP - sliders control Roll and Pitch only, enter Yaw values manually<br>&bull; RPY - sliders control all PID values<br><br><span class=\"message-negative\"><b>Warning:</b></span>Going from RP to RPY mode will overwrite Yaw settings with firmware settings."
    },
    "receiverHelp": {
        "message": "&#8226;  <b><strong><a href=\"https://github.com/betaflight/betaflight/blob/master/docs/Failsafe.md#testing\" target=\"_blank\" rel=\"noopener noreferrer\">Always check that your Failsafe is working properly!</a></strong></b> The settings are in the Failsafe tab, which requires Expert Mode.<br> &#8226; <b>Use the latest Tx firmware!</b><br> &#8226; <strong><a href=\"https://github.com/betaflight/betaflight/blob/master/docs/Rx.md#disabling-the-opentxedgetx-adc-filter\" target=\"_blank\" rel=\"noopener noreferrer\">Disable the hardware ADC filter</a></strong> in the Transmitter if using OpenTx or EdgeTx.<br>Basic Setup: Configure the 'Receiver' settings correctly. Choose the correct ‘Channel Map’ for your radio. Check that the Roll, Pitch and other bar graphs move correctly. Adjust the channel endpoint or range values in the transmitter to ~1000 to ~2000, and set the midpoint to 1500. For more information, read the <strong><a href=\"https://github.com/betaflight/betaflight/blob/master/docs/Rx.md\" target=\"_blank\" rel=\"noopener noreferrer\">documentation</a></strong>."
    },
    "receiverThrottleMid": {
        "message": "Throttle MID"
    },
    "receiverThrottleExpo": {
        "message": "Throttle EXPO"
    },
    "receiverStickMin": {
        "message": "'Stick Low' Threshold"
    },
    "receiverHelpStickMin": {
        "message": "The maximum value (in us) for a stick to be recognised as low / left for command input (MIN_CHECK)."
    },
    "receiverStickCenter": {
        "message": "Stick Center"
    },
    "receiverHelpStickCenter": {
        "message": "The value (in us) used to determine if a stick is centered (MID_RC)."
    },
    "receiverStickMax": {
        "message": "'Stick High' Threshold"
    },
    "receiverHelpStickMax": {
        "message": "The minimum value (in us) for a stick to be recognised as high / right for command input (MAX_CHECK)."
    },
    "receiverDeadband": {
        "message": "RC Deadband"
    },
    "receiverHelpDeadband": {
        "message": "These are values (in us) by how much RC input can be different before it's considered valid. For transmitters with jitter on outputs, this value can be increased if rc inputs twitch while idle."
    },
    "receiverYawDeadband": {
        "message": "Yaw Deadband"
    },
    "receiverHelpYawDeadband": {
        "message": "These are values (in us) by how much RC input can be different before it's considered valid. For transmitters with jitter on outputs, this value can be increased if rc inputs twitch while idle. <strong>This setting is for Yaw only.</strong>"
    },
    "recevier3dDeadbandThrottle": {
        "message": "3D Throttle Deadband"
    },
    "receiverHelp3dDeadbandThrottle": {
        "message": "These are values (in us). To widen the neutral zone increased the value. <strong>This setting is for 3D throttle only.</strong>"
    },
    "receiverChannelMap": {
        "message": "Channel Map"
    },
    "receiverChannelDefaultOption": {
        "message": "Default"
    },
    "receiverChannelMapTitle": {
        "message": "You can define your own channel map by clicking inside the box"
    },
    "receiverRssiChannel": {
        "message": "RSSI Channel"
    },
    "receiverRssiChannelDisabledOption": {
        "message": "Disabled"
    },
    "receiverRefreshRateTitle": {
        "message": "Graph refresh rate"
    },
    "receiverResetRefreshRate": {
        "message": "Reset"
    },
    "receiverResetRefreshRateTitle": {
        "message": "Reset refresh rate"
    },
    "receiverButtonSave": {
        "message": "Save"
    },
    "receiverButtonRefresh": {
        "message": "Refresh"
    },
    "receiverButtonBind": {
        "message": "Bind Receiver"
    },
    "receiverButtonBindMessage": {
        "message": "Bind request sent to the flight controller."
    },
    "receiverButtonSticks": {
        "message": "Control sticks"
    },
    "receiverDataRefreshed": {
        "message": "RC Tuning data <strong>refreshed</strong>"
    },
    "receiverEepromSaved": {
        "message": "EEPROM <span class=\"message-positive\">saved</span>"
    },
    "receiverModelPreview": {
        "message": "Preview"
    },

    "receiverMspWarningText": {
        "message": "These sticks allow Betaflight to be armed and tested without a transmitter or receiver being present. However, <strong>this feature is not intended for flight and propellers must not be attached.</strong><br /><br />This feature does not guarantee reliable control of your craft. <strong>Serious injury is likely to result if propellers are left on.</strong>"
    },
    "receiverMspEnableButton": {
        "message": "Enable controls"
    },

    "auxiliaryHelp": {
        "message": "Configure modes here using a combination of ranges and/or links to other modes (links supported on BF 4.0 and later). Use <strong>ranges</strong> to define the switches on your transmitter and corresponding mode assignments. A receiver channel that gives a reading between a range min/max will activate the mode. Use a <strong>link</strong> to activate a mode when another mode is activated. <strong>Exceptions:</strong> ARM cannot be linked to or from another mode, modes cannot be linked to other modes that are configured with a link (chained links). Multiple ranges/links can be used to activate any mode. If there is more than one range/link defined for a mode, each of them can be set to <strong>AND</strong> or <strong>OR</strong>. A mode will be activated when:<br />- ALL <strong>AND</strong> ranges/links are active; OR<br />- at least one <strong>OR</strong> range/link is active.<br /><br />Remember to save your settings using the Save button."
    },
    "auxiliaryToggleUnused": {
        "message": "Hide unused modes"
    },
    "auxiliaryMin": {
        "message": "Min"
    },
    "auxiliaryMax": {
        "message": "Max"
    },
    "auxiliaryDisabled": {
        "message": "(DISABLED)",
        "descripton": "Text to add to the ARM mode (maybe others in the future) in the MODES TAB when it has been disabled for some external reason"
    },
    "auxiliaryAddRange": {
        "message": "Add Range"
    },
    "auxiliaryAddLink": {
        "message": "Add Link"
    },
    "auxiliaryButtonSave": {
        "message": "Save"
    },
    "auxiliaryEepromSaved": {
        "message": "EEPROM <span class=\"message-positive\">saved</span>"
    },
    "auxiliaryAutoChannelSelect": {
      "message": "AUTO"
    },
    "auxiliaryModeLogicOR": {
      "message": "OR"
    },
    "auxiliaryModeLogicAND": {
      "message": "AND"
    },
    "adjustmentsHelp": {
        "message": "Configure adjustment switches. See the 'in-flight adjustments' section of the manual for details. The changes that adjustment functions make are not saved automatically."
    },
    "adjustmentSlotsHelp": {
        "message": "There are 4 slots. Each switch used to concurrently make adjustments requires exclusive use of a slot."
    },
    "adjustmentsExamples": {
        "message": "Examples:"
    },
    "adjustmentsExample1": {
        "message": "Use a three position switch on AUX1 to select between Pitch/Roll P, I and D and another three position switch on AUX2 to increase or decrease the value when held up or down."
    },
    "adjustmentsExample2": {
        "message": "Use a three position switch on AUX4 to select enable Rate Profile Selection via the same three position switch on the same channel."
    },
    "adjustmentsColumnEnable": {
        "message": "If enabled"
    },
    "adjustmentsColumnUsingSlot": {
        "message": "using slot"
    },
    "adjustmentsColumnWhenChannel": {
        "message": "when channel"
    },
    "adjustmentsColumnIsInRange": {
        "message": "is in range"
    },
    "adjustmentsColumnThenApplyFunction": {
        "message": "then apply"
    },
    "adjustmentsColumnViaChannel": {
        "message": "via channel"
    },
    "adjustmentsSlot0": {
        "message": "Slot 1"
    },
    "adjustmentsSlot1": {
        "message": "Slot 2"
    },
    "adjustmentsSlot2": {
        "message": "Slot 3"
    },
    "adjustmentsSlot3": {
        "message": "Slot 4"
    },
    "adjustmentsMin": {
        "message": "Min"
    },
    "adjustmentsMax": {
        "message": "Max"
    },
    "adjustmentsFunction0": {
        "message": "No changes"
    },
    "adjustmentsFunction1": {
        "message": "RC Rate Adjustment"
    },
    "adjustmentsFunction2": {
        "message": "RC Expo Adjustment"
    },
    "adjustmentsFunction3": {
        "message": "Throttle Expo Adjustment"
    },
    "adjustmentsFunction4": {
        "message": "Pitch & Roll Rate Adjustment"
    },
    "adjustmentsFunction5": {
        "message": "Yaw Rate Adjustment"
    },
    "adjustmentsFunction6": {
        "message": "Pitch & Roll P Adjustment"
    },
    "adjustmentsFunction7": {
        "message": "Pitch & Roll I Adjustment"
    },
    "adjustmentsFunction8": {
        "message": "Pitch & Roll D Adjustment"
    },
    "adjustmentsFunction9": {
        "message": "Yaw P Adjustment"
    },
    "adjustmentsFunction10": {
        "message": "Yaw I Adjustment"
    },
    "adjustmentsFunction11": {
        "message": "Yaw D Adjustment"
    },
    "adjustmentsFunction12": {
        "message": "Rate Profile Selection"
    },
    "adjustmentsFunction13": {
        "message": "Pitch Rate"
    },
    "adjustmentsFunction14": {
        "message": "Roll Rate"
    },
    "adjustmentsFunction15": {
        "message": "Pitch P Adjustment"
    },
    "adjustmentsFunction16": {
        "message": "Pitch I Adjustment"
    },
    "adjustmentsFunction17": {
        "message": "Pitch D Adjustment"
    },
    "adjustmentsFunction18": {
        "message": "Roll P Adjustment"
    },
    "adjustmentsFunction19": {
        "message": "Roll I Adjustment"
    },
    "adjustmentsFunction20": {
        "message": "Roll D Adjustment"
    },
    "adjustmentsFunction21": {
        "message": "RC Rate Yaw"
    },
    "adjustmentsFunction22": {
        "message": "D Setpoint"
    },
    "adjustmentsFunction22_2": {
        "message": "Pitch & Roll F Adjustment"
    },
    "adjustmentsFunction23": {
        "message": "D Setpoint Transition"
    },
    "adjustmentsFunction23_2": {
        "message": "Feedforward Transition"
    },
    "adjustmentsFunction24": {
        "message": "Horizon Strength Adjustment"
    },
    "adjustmentsFunction25": {
        "message": "PID-Audio Selection"
    },
    "adjustmentsFunction26": {
        "message": "Pitch F Adjustment"
    },
    "adjustmentsFunction27": {
        "message": "Roll F Adjustment"
    },
    "adjustmentsFunction28": {
        "message": "Yaw F Adjustment"
    },
    "adjustmentsFunction29": {
        "message": "OSD Profile Selection"
    },
    "adjustmentsFunction30": {
        "message": "LED Profile Selection"
    },
    "adjustmentsSave": {
        "message": "Save"
    },
    "adjustmentsEepromSaved": {
        "message": "EEPROM <span class=\"message-positive\">saved</span>"
    },

    "transponderNotSupported": {
        "message": "Your flight controller's firmware does not support transponder functionality."
    },
    "transponderInformation": {
        "message": "Transponders systems allow race organizers to time your laps.  The transponder is fitted to your aircraft and when your aircraft passes the timing gate the track-side receiver registers your code and records your laptime.  When fitting an IR based transponder your should ensure that it points outward from your aircraft towards the track-side receivers and that the light beam is not obstructed by your airframe, battery-straps, cables, propellers, etc."
    },
    "transponderConfigurationType": {
        "message": "Transponder type"
    },
    "transponderType0": {
        "message": "None"
    },
    "transponderType1": {
        "message": "iLap"
    },
    "transponderType2": {
        "message": "aRCiTimer"
    },
    "transponderType3": {
        "message": "ERLT"
    },
    "transponderConfiguration1": {
        "message": "Configuration iLap"
    },
    "transponderConfiguration2": {
        "message": "Configuration aRCiTimer"
    },
    "transponderConfiguration3": {
        "message": "Configuration ERLT"
    },
    "transponderData1": {
        "message": "Data"
    },
    "transponderData2": {
        "message": "Transponder ID"
    },
    "transponderData3": {
        "message": "Transponder ID"
    },
    "transponderDataHelp1": {
        "message": "Hexadecimal digits only, 0-9, A-F"
    },
    "transponderHelp1": {
        "message": "Configure your transponder code here.  Note: Only valid codes will be recognised by race timing systems.  Valid transponder codes can be obtained from <a href=\"http://seriouslypro.com/transponder-codes\" target=\"_blank\" rel=\"noopener noreferrer\">Seriously Pro</a>."
    },
    "transponderHelp2": {
        "message": "For more information please visit <a href=\"http://www.arcitimer.com/\" title=\"aRCiTimer\" target=\"_blank\" rel=\"noopener noreferrer\">aRCiTimer site</a>"
    },
    "transponderDataHelp3": {
        "message": "Choose ERLT ID 0-63"
    },
    "transponderHelp3": {
        "message": "For more information please visit <a href=\"https://github.com/polyvision/EasyRaceLapTimer\" title=\"aRCiTimer\" target=\"_blank\" rel=\"noopener noreferrer\">EasyRaceLapTimer site</a>"
    },
    "transponderButtonSave": {
        "message": "Save"
    },
    "transponderButtonSaveReboot": {
        "message": "Save and Reboot"
    },
    "transponderDataInvalid": {
        "message": "Transponder data is <span class=\"message-negative\">invalid</span>"
    },
    "transponderEepromSaved": {
        "message": "EEPROM <span class=\"message-positive\">saved</span>"
    },

    "servosFirmwareUpgradeRequired": {
        "message": "Servos requires firmware &gt;= 1.10.0. and target support."
    },
    "servosChangeDirection": {
        "message": "Change Direction in TX To Match"
    },
    "servosName": {
        "message": "Name"
    },
    "servosMid": {
        "message": "MID"
    },
    "servosMin": {
        "message": "MIN"
    },
    "servosMax": {
        "message": "MAX"
    },
    "servosAngleAtMin": {
        "message": "Angle at min"
    },
    "servosAngleAtMax": {
        "message": "Angle at max"
    },
    "servosDirectionAndRate": {
        "message": "Direction and rate"
    },
    "servosLiveMode": {
        "message": "Enable Live mode"
    },
    "servosButtonSave": {
        "message": "Save"
    },
    "servosNormal": {
        "message": "Normal"
    },
    "servosReverse": {
        "message": "Reverse"
    },
    "servosEepromSave": {
        "message": "EEPROM <span class=\"message-positive\">saved</span>"
    },
    "gpsHead": {
        "message": "GPS"
    },
    "gpsMapHead": {
        "message": "Current GPS location"
    },
    "gpsMapMessage1": {
        "message": "Please check your internet connection"
    },
    "gpsMapMessage2": {
        "message": "Waiting for GPS 3D fix…"
    },
    "gps3dFix": {
        "message": "3D Fix:"
    },
    "gpsFixTrue": {
        "message": "<span class=\"fixtrue\">True</span>"
    },
    "gpsFixFalse": {
        "message": "<span class=\"fixfalse\">False</span>"
    },
    "gpsAltitude": {
        "message": "Altitude:"
    },
    "gpsLat": {
        "message": "Latitude:"
    },
    "gpsLon": {
        "message": "Longitude:"
    },
    "gpsSpeed": {
        "message": "Speed:"
    },
    "gpsSats": {
        "message": "Sats:"
    },
    "gpsDistToHome": {
        "message": "Dist to Home:"
    },
    "gpsSignalStrHead": {
        "message": "GPS Signal Strength"
    },
    "gpsSignalStr": {
        "message": "Signal Strength"
    },
    "gpsSignalGnssId": {
        "message": "Gnss ID"
    },
    "gpsSignalSatId": {
        "message": "Sat ID"
    },
    "gpsSignalStatusQly": {
        "message": "Status / Quality"
    },
    "gnssQualityNoSignal": {
        "message": "no signal"
    },
    "gnssQualitySearching": {
        "message": "searching"
    },
    "gnssQualityAcquired": {
        "message": "acquired"
    },
    "gnssQualityUnusable": {
        "message": "unusable"
    },
    "gnssQualityLocked": {
        "message": "locked"
    },
    "gnssQualityFullyLocked": {
        "message": "fully locked"
    },
    "gnssUsedUnused": {
        "message": "unused"
    },
    "gnssUsedUsed": {
        "message": "used"
    },
    "gnssHealthyUnknown": {
        "message": "unknown"
    },
    "gnssHealthyHealthy": {
        "message": "healthy"
    },
    "gnssHealthyUnhealthy": {
        "message": "unhealthy"
    },

    "motorsVoltage": {
        "message": "Voltage:"
    },
    "motorsADrawing": {
        "message": "Amperage:"
    },
    "motorsmAhDrawn": {
        "message": "Amp. drawn:"
    },
    "motorsVoltageValue": {
        "message": "$1 V"
    },
    "motorsADrawingValue": {
        "message": "$1 A"
    },
    "motorsmAhDrawnValue": {
        "message": "$1 mAh"
    },

    "motorsText":{
        "message": "Motors"
    },
    "motorNumber1":{
        "message": "Motor - 1"
    },
    "motorNumber2":{
        "message": "Motor - 2"
    },
    "motorNumber3":{
        "message": "Motor - 3"
    },
    "motorNumber4":{
        "message": "Motor - 4"
    },
    "motorNumber5":{
        "message": "Motor - 5"
    },
    "motorNumber6":{
        "message": "Motor - 6"
    },
    "motorNumber7":{
        "message": "Motor - 7"
    },
    "motorNumber8":{
        "message": "Motor - 8"
    },

    "servosText":{
        "message": "Servos"
    },
    "servoNumber1":{
        "message": "Servo - 1"
    },
    "servoNumber2":{
        "message": "Servo - 2"
    },
    "servoNumber3":{
        "message": "Servo - 3"
    },
    "servoNumber4":{
        "message": "Servo - 4"
    },
    "servoNumber5":{
        "message": "Servo - 5"
    },
    "servoNumber6":{
        "message": "Servo - 6"
    },
    "servoNumber7":{
        "message": "Servo - 7"
    },
    "servoNumber8":{
        "message": "Servo - 8"
    },

    "motorsResetMaximumButton":{
        "message": "Reset"
    },
    "motorsResetMaximum":{
        "message": "Reset overtime maximum"
    },
    "motorsSensorGyroSelect":{
        "message": "gyro"
    },
    "motorsSensorAccelSelect":{
        "message": "accel"
    },
    "motorsTelemetryHelp": {
        "message": "This numbers show the telemetry info received from the ESCs if available. It can show the actual speed of motors (in RPM), the error rate of the telemetry link and the temperature of the ESCs.",
        "description": "Help text for the telemetry values in the motors tab."
    },
    "motorsRPM": {
        "message": "R: {{motorsRpmValue}}",
        "description": "To put under the motors in the motors tab. KEEP IT SHORT or not translate. Keep the letters as prefix. Shows the RPM of the motor if telemetry is available."
    },
    "motorsRPMError": {
        "message": "E: {{motorsErrorValue}}%",
        "description": "To put under the motors in the motors tab. KEEP IT SHORT or not translate. Shows the error of motor telemetry if available."
    },
    "motorsESCTemperature": {
        "message": "T: {{motorsESCTempValue}}&deg;C",
        "description": "To put under the motors in the motors tab. KEEP IT SHORT or not translate. Shows the ESC temperature if available."
    },
    "motorsMaster": {
        "message": "Master"
    },
    "motorsNotice": {
        "message": "<strong>Motor Test Mode / Arming Notice:</strong><br />Moving the sliders or arming your craft with the transmitter will cause the motors to <strong>spin up</strong>.<br />In order to prevent injury <strong class=\"message-negative\">remove ALL propellers</strong> before using this feature.<br />Enabling motor test mode will also temporarily disable Runaway Takeoff Prevention, to stop it from disarming the craft when bench testing without propellers.<br />"
    },
    "motorsEnableControl": {
        "message": "<strong>I understand the risks</strong>, the propellers are removed - enable motor control and arming, and disable Runaway Takeoff Prevention."
    },
    "motorsDialogMixerReset": {
        "message": "<strong>Mixer mode problem detected</strong><br /><br />The {{mixerName}} model needs <strong class=\"message-positive\">{{mixerMotors}}</strong> motor resources and the current configuration of the firmware provides <strong class=\"message-positive\">{{outputs}}</strong> usable output(s) for the selected mode.<br /><br />If using a custom mixer mode you need to define a custom mmix before changing mixer mode.<br /><br />Please check your configuration and add the required motor resources."
    },
    "motorsDialogSettingsChanged": {
        "message": "Configuration changes have been detected.<br /><br /><strong class=\"message-negative-italic\">Motor Test Mode is disabled until the settings have seen saved.</strong>"
    },
    "motorsDialogSettingsChangedOk": {
        "message": "OK"
    },

    "motorOutputReorderDialogClose": {
        "message": "Cancel"
    },
    "motorOutputReorderDialogAgree": {
        "message": "Start"
    },
    "motorsRemapDialogTitle": {
        "message": "Reorder motors"
    },
    "motorOutputReorderDialogOpen": {
        "message": "Reorder motors"
    },
    "motorOutputReorderDialogSelectSpinningMotor": {
        "message": "Click on the spinning motor..."
    },
    "motorOutputReorderDialogRemapIsDone": {
        "message": "Ready! Check the motors spinning order by clicking on the image."
    },
    "motorsRemapDialogUnderstandRisks": {
        "message": "<strong>I understand the risks</strong>,<br />the propellers are removed."
    },
    "motorsRemapDialogRiskNotice": {
        "message": "<strong>Safety notice</strong><br /><strong class=\"message-negative\">Remove all propellers to prevent injury!</strong><br />The motors will <strong>spin up!</strong>"
    },
    "motorsRemapDialogExplanations": {
        "message": "<strong>Information notice</strong><br />Motors will spin up one by one and you will be able to select which motor is spinning. The battery should be plugged in, correct ESC protocol should be selected. This utility can only re-arrange currently active motors. More complex re-mapping requires the CLI Resource command. Refer to this <a href=\"https://github.com/betaflight/betaflight/wiki/Betaflight-resource-remapping\" target=\"_blank\" rel=\"noopener noreferrer\">Wiki page</a>."
    },
    "motorsRemapDialogSave": {
        "message": "Save"
    },
    "motorsRemapDialogStartOver": {
        "message": "Start over"
    },
    "motorsButtonReset": {
        "message": "Reset"
    },
    "motorsButtonSave": {
        "message": "Save and Reboot"
    },
    "escDshotDirectionDialog-Title": {
        "message": "Motor Direction - <strong class=\"message-negative-italic\">Warning: Ensure props are removed!</strong>"
    },
    "escDshotDirectionDialog-SelectMotor": {
        "message": "Select one or all motors"
    },
    "escDshotDirectionDialog-SelectMotorSafety": {
        "message": "Motors will spin when selected!"
    },
    "escDshotDirectionDialog-RiskNotice": {
        "message": "<strong>Safety notice</strong><br /><strong class=\"message-negative-italic\">Remove all propellers to prevent injury!</strong><br />The motors will <strong>spin up</strong> immediately when selected!"
    },
    "escDshotDirectionDialog-UnderstandRisks": {
        "message": "<strong>I understand the risks</strong>,<br />all propellers are removed."
    },
    "escDshotDirectionDialog-InformationNotice": {
        "message": "<strong>Information notice</strong><br />To change the motor directions, the battery must be plugged in and the correct ESC protocol must be set up in the $t(tabMotorTesting.message) tab. Note that not all Dshot ESCs will work with this dialog. Check your ESC firmware."
    },
    "escDshotDirectionDialog-NormalInformationNotice": {
        "message": "Set motor spin direction by selecting and spinning each motor individually."
    },
    "escDshotDirectionDialog-WizardInformationNotice": {
        "message": "Resets all motor spin directions, then allows the user to choose which to reverse."
    },
    "escDshotDirectionDialog-Open": {
        "message": "Motor direction"
    },
    "escDshotDirectionDialog-CommandNormal": {
        "message": "Normal"
    },
    "escDshotDirectionDialog-CommandReverse": {
        "message": "Reverse"
    },
    "escDshotDirectionDialog-CommandSpin": {
        "message": "Test motor"
    },
    "escDshotDirectionDialog-ReleaseButtonToStop": {
        "message": "Release button to stop"
    },
    "escDshotDirectionDialog-ReleaseToStop": {
        "message": "Release to stop"
    },
    "escDshotDirectionDialog-Start": {
        "message": "Individually"
    },
    "escDshotDirectionDialog-StartWizard": {
        "message": "Wizard"
    },
    "escDshotDirectionDialog-SetDirectionHint": {
        "message": "Change direction of selected motor(s)"
    },
    "escDshotDirectionDialog-SetDirectionHintSafety": {
        "message": "Motors will spin when setting the direction!"
    },
    "escDshotDirectionDialog-WrongProtocolText": {
        "message": "Feature works with DSHOT ESCs only.<br />Verify that your ESC (electric speed controller) supports DSHOT protocol and change it on $t(tabMotorTesting.message) tab."
    },
    "escDshotDirectionDialog-WrongMixerText": {
        "message": "Number of motors is 0.<br />Verify the current Mixer on $t(tabMotorTesting.message) tab or setup a custom one through CLI. Refer to this <a href=\"https://github.com/betaflight/betaflight/blob/master/docs/Mixer.md\" target=\"_blank\" rel=\"noopener noreferrer\">Wiki page</a>."
    },
    "escDshotDirectionDialog-WrongFirmwareText": {
        "message": "Update the firmware.<br /> Make sure you are using the latest firmware: Betaflight 4.3 or newer."
    },
    "escDshotDirectionDialog-WizardActionHint": {
        "message": "Click on motor numbers individually to change spin direction"
    },
    "escDshotDirectionDialog-WizardActionHintSecondLine": {
        "message": "Verify all motors are spinning correctly"
    },
    "escDshotDirectionDialog-SpinWizard": {
        "message": "Start / spin motors"
    },
    "escDshotDirectionDialog-StopWizard": {
        "message": "Stop motors"
    },

    "sensorsInfo": {
        "message": "Keep in mind that using fast update periods and rendering multiple graphs at the same time is resource heavy and will burn your battery quicker if you use a laptop.<br />We recommend to only render graphs for sensors you are interested in while using reasonable update periods."
    },
    "sensorsRefresh": {
        "message": "Refresh:"
    },
    "sensorsScale": {
        "message": "Scale:"
    },
    "sensorsGyroSelect": {
        "message": "Gyroscope"
    },
    "sensorsAccelSelect": {
        "message": "Accelerometer"
    },
    "sensorsMagSelect": {
        "message": "Magnetometer"
    },
    "sensorsAltitudeSelect": {
        "message": "Altitude"
    },
    "sensorsSonarSelect": {
        "message": "Sonar"
    },
    "sensorsDebugSelect": {
        "message": "Debug"
    },
    "sensorsGyroTitle": {
        "message": "Gyroscope - deg/s"
    },
    "sensorsAccelTitle": {
        "message": "Accelerometer - g (deg)"
    },
    "sensorsMagTitle": {
        "message": "Magnetometer - Ga"
    },
    "sensorsAltitudeTitle": {
        "message": "Altitude - meters"
    },
    "sensorsAltitudeHint": {
        "message": "The altitude is calculated by combining the output of the barometer (if available) with the altitude output from the GPS (if available). If a GPS connected and the GPS has a fix, the absolute altitude above sea level will be shown when disarmed. When armed, the altitude relative to the position when arming will be shown."
    },
    "sensorsSonarTitle": {
        "message": "Sonar - cm"
    },
    "sensorsDebugTitle": {
        "message": "Debug"
    },

    "cliInfo": {
        "message": "<strong>Note:</strong> Leaving CLI tab or pressing Disconnect will <strong>automatically</strong> send \"<strong>exit</strong>\" to the board.  With the latest firmware this will make the controller <strong>restart</strong> and unsaved changes will be <strong>lost</strong>.<p><strong><span class=\"message-negative\">Warning:</span></strong> Some commands in CLI can result in arbitrary signals being sent on the motor output pins. This can cause motors to spin up if a battery is connected. Therefore it is highly recommended to make sure that <strong>no battery is connected before entering commands in CLI</strong>."
    },
    "cliInputPlaceholder": {
        "message": "Write your command here. Press Tab for AutoComplete."
    },
    "cliInputPlaceholderBuilding": {
        "message": "Please wait while building AutoComplete cache ..."
    },
    "cliEnter": {
        "message": "CLI mode detected"
    },
    "cliReboot": {
        "message": "CLI reboot detected"
    },
    "cliSaveToFileBtn": {
        "message": "Save to File"
    },
    "cliClearOutputHistoryBtn": {
        "message": "Clear output history"
    },
    "cliCopyToClipboardBtn": {
        "message": "Copy to clipboard"
    },
    "cliCopySuccessful": {
        "message": "Copied!"
    },
    "cliLoadFromFileBtn": {
        "message": "Load from file"
    },
    "cliConfirmSnippetDialogTitle": {
        "message": "Loaded file <strong>{{fileName}}</strong>. Review the loaded commands"
    },
    "cliConfirmSnippetNote": {
        "message": "<strong>Note</strong>: You can review and edit commands before execution."
    },
    "cliConfirmSnippetBtn": {
        "message": "Execute"
    },

    "loggingNote": {
        "message": "Data will be logged in this tab <span class=\"message-negative\">only</span>, leaving the tab will <span class=\"message-negative\">cancel</span> logging and application will return to its normal <strong>\"configurator\"</strong> state.<br /> You are free to select the global update period, data will be written into the log file every <strong>1</strong> second for performance reasons."
    },
    "loggingSamplesSaved": {
        "message": "Samples Saved:"
    },
    "loggingLogSize": {
        "message": "Log Size:"
    },
    "loggingButtonLogFile": {
        "message": "Select Log File"
    },
    "loggingStart": {
        "message": "Start Logging"
    },
    "loggingStop": {
        "message": "Stop Logging"
    },
    "loggingBack": {
        "message": "Leave Logging / Disconnect"
    },
    "loggingErrorNotConnected": {
        "message": "You need to <strong>connect</strong> first"
    },
    "loggingErrorLogFile": {
        "message": "Please select log file"
    },
    "loggingErrorOneProperty": {
        "message": "Please select at least one property to log"
    },
    "loggingAutomaticallyRetained": {
        "message": "Automatically loaded previous log file: <strong>$1</strong>"
    },

    "blackboxNotSupported": {
        "message": "Your flight controller's firmware does not support Blackbox logging."
    },
    "blackboxMaybeSupported": {
        "message": "Your flight controller's firmware is too old to support this tab, or the Blackbox feature is disabled on the Configuration tab."
    },
    "blackboxConfiguration": {
        "message": "Blackbox configuration"
    },
    "blackboxButtonSave": {
        "message": "Save and reboot"
    },
    "blackboxLoggingNone": {
        "message": "No Logging"
    },
    "blackboxLoggingFlash": {
        "message": "Onboard Flash"
    },
    "blackboxLoggingSdCard": {
        "message": "SD Card"
    },
    "blackboxLoggingSerial": {
        "message": "Serial Port"
    },

    "serialLoggingSupportedNote": {
        "message": "You can log to an external logging device (such as an OpenLager) by using a serial port. Configure the port on the Ports tab."
    },
    "sdcardNote": {
        "message": "Flight logs can be recorded to your flight controller's onboard SD card slot."
    },

    "dataflashUsedSpace": {
        "message": "Used space"
    },
    "dataflashFreeSpace": {
        "message": "Free space"
    },
    "dataflashUnavSpace": {
        "message": "Unavailable space"
    },
    "dataflashLogsSpace": {
        "message": "Free space for logs"
    },
    "dataflashNote": {
        "message": "Flight logs can be recorded to your flight controller's onboard dataflash chip."
    },
    "dataflashNotPresentNote": {
        "message": "Your flight controller does not have a compatible dataflash chip available."
    },
    "dataflashFirmwareUpgradeRequired": {
        "message": "Dataflash requires firmware &gt;= 1.8.0."
    },
    "dataflashButtonSaveFile": {
        "message": "Save flash to file..."
    },
    "dataflashButtonSaveFileDeprecated": {
        "message": "Save flash to file... (unsupported)"
    },
    "dataflashSavetoFileNote": {
        "message": "Directly saving flash to file is slow and inherently prone to error / file corruption.<br>In some cases it will work for small files, but this is not supported and support requests for it will be closed without comment - use Mass Storage mode instead."
    },
    "dataflashSaveFileDepreciationHint": {
        "message": "This method is slow and inherently prone to error / file corruption, because the MSP connection itself has intrinsic, fundamental limitations that make it unsuitable for file transfers. It may work for small log files only. Do not create support requests if file transfers fail when saved using this method. The recommended method is to use '<b>$t(onboardLoggingRebootMscText.message)</b>' (below) to activate the Mass Storage Mode, and access your flight controller as a storage device to download the log files."
    },
    "dataflashButtonErase": {
        "message": "Erase flash"
    },
    "dataflashConfirmEraseTitle": {
        "message": "Confirm dataflash erase"
    },
    "dataflashConfirmEraseNote": {
        "message": "This will erase any Blackbox logs or other data contained in the dataflash. It should take about 20 seconds, are you sure?"
    },
    "dataflashSavingTitle": {
        "message": "Saving dataflash to file"
    },
    "dataflashSavingNote": {
        "message": "Saving could take several minutes, please wait."
    },
    "dataflashSavingNoteAfter": {
        "message": "Save completed! Press \"Ok\" to continue."
    },
    "dataflashButtonSaveCancel": {
        "message": "Cancel"
    },
    "dataflashButtonSaveDismiss": {
        "message": "Ok"
    },
    "dataflashButtonEraseConfirm": {
        "message": "Yes, erase dataflash"
    },
    "dataflashButtonEraseCancel": {
        "message": "Cancel"
    },
    "dataflashFileWriteFailed": {
        "message": "Failed to write to the file you selected, are the permissions on that folder okay?"
    },

    "sdcardStatusNoCard": {
        "message": "No card inserted"
    },
    "sdcardStatusReboot": {
        "message": "Fatal error<br>Reboot to retry"
    },
    "sdcardStatusReady": {
        "message": "Card ready"
    },
    "sdcardStatusStarting": {
        "message": "Card starting..."
    },
    "sdcardStatusFileSystem": {
        "message": "Filesystem starting..."
    },
    "sdcardStatusUnknown": {
        "message": "Unknown state $1"
    },

    "firmwareFlasherReleaseSummaryHead": {
        "message": "Release info"
    },
    "firmwareFlasherReleaseManufacturer": {
        "message": "Manufacturer ID:"
    },
    "firmwareFlasherReleaseVersion": {
        "message": "Version:"
    },
    "firmwareFlasherReleaseVersionUrl": {
        "message": "Visit release page."
    },
    "firmwareFlasherReleaseNotes": {
        "message": "Release notes:"
    },
    "firmwareFlasherReleaseDate": {
        "message": "Date:"
    },
    "firmwareFlasherReleaseTarget": {
        "message": "Target:"
    },
    "firmwareFlasherReleaseFile": {
        "message": "Binary:"
    },
    "firmwareFlasherUnifiedTargetName": {
        "message": "Unified Target:"
    },
    "firmwareFlasherUnifiedTargetFileUrl": {
        "message": "Show config."
    },
    "firmwareFlasherUnifiedTargetDate": {
        "message": "Date:"
    },
    "firmwareFlasherReleaseFileUrl": {
        "message": "Download manually."
    },
    "firmwareFlasherTargetWarning": {
        "message": "<span class=\"message-negative\">IMPORTANT</span>: Ensure you flash a file appropriate for your target.  Flashing a binary for the wrong target can cause <span class=\"message-negative\">bad</span> things to happen."
    },

    "firmwareFlasherPath": {
        "message": "Path:"
    },
    "firmwareFlasherSize": {
        "message": "Size:"
    },
    "firmwareFlasherStatus": {
        "message": "Status:"
    },
    "firmwareFlasherProgress": {
        "message": "Progress:"
    },
    "firmwareFlasherLoadFirmwareFile": {
        "message": "Please load firmware file"
    },
    "firmwareFlasherLoadedConfig": {
        "message": "Loaded target, please load firmware file"
    },
    "firmwareFlasherNoReboot": {
        "message": "No reboot sequence"
    },
    "firmwareFlasherOnlineSelectBuildType": {
        "message": "Select build type to see available boards."
    },
    "firmwareFlasherOnlineSelectBoardDescription": {
        "message": "Select or auto-detect your board to see available online firmware releases - Select the correct firmware appropriate for your board."
    },
    "firmwareFlasherOnlineSelectBoardHint": {
        "message": "Starting with Betaflight 4.1, Betaflight is introducing support for <strong>Unified Targets</strong>. The concept of Unified Targets means that the same firmware .hex file can be used for all boards using the same MCU (F4, F7). To make the different boards work with the same firmware, a specific configuration file is deployed alongside the firmware when a Unified Target is flashed.<br>This version of Betaflight configurator supports flashing of Unified Targets with the respective board specific configurations in one step. The different firmware types that are available for each board are shown in the drop-down as follows:<br /><br /><strong>&lt;board name&gt;</strong> or<br><strong>&lt;board name&gt; (Legacy)</strong>:<br>non-unified target, or pre-4.1 versions of the firmware for Unified Targets.<br /><br /><strong>&lt;board name&gt; (&lt;manufacturer id&gt;)</strong>:<br>(4 character manufacturer id)<br>Unified Target.<br /><br /><strong>Please use Unified Targets where available.</strong> If you encounter problems using a Unified Target, please open an <a href=\"https://github.com/betaflight/betaflight/issues\" target=\"_blank\" rel=\"noopener noreferrer\">issue</a> and then use the non-unified target until the issue has been resolved."
    },
    "firmwareFlasherOnlineSelectFirmwareVersionDescription": {
        "message": "Select firmware version for your board."
    },
    "firmwareFlasherNoRebootDescription": {
        "message": "Enable if your FC is in boot mode. i.e. if you powered on your FC with the bootloader pins jumped or whilst holding your FC's BOOT button."
    },
    "firmwareFlasherFlashOnConnect": {
        "message": "Flash on connect"
    },
    "firmwareFlasherFlashOnConnectDescription": {
        "message": "Attempt to flash the board automatically (triggered by newly detected serial port)."
    },
    "firmwareFlasherFullChipErase": {
        "message": "Full chip erase"
    },
    "firmwareFlasherFullChipEraseDescription": {
        "message": "Wipes all configuration data currently stored on the board."
    },
    "firmwareFlasherFlashDevelopmentFirmware": {
        "message": "Use Development Firmware"
    },
    "firmwareFlasherFlashDevelopmentFirmwareDescription": {
        "message": "Flash most recent (untested) development firmware."
    },
    "firmwareFlasherManualPort": {
        "message": "Port"
    },
    "firmwareFlasherManualBaud": {
        "message": "Manual baud rate"
    },
    "firmwareFlasherManualBaudDescription": {
        "message": "Manual selection of baud rate for boards that don't support the default speed or for flashing via bluetooth.<br /><span class=\"message-negative\">Note:</span> Not used when flashing via USB DFU"
    },
    "firmwareFlasherBaudRate": {
        "message": "Baud Rate"
    },
    "firmwareFlasherShowDevelopmentReleases":{
        "message": "Show unstable releases"
    },
    "firmwareFlasherShowDevelopmentReleasesDescription":{
        "message": "Show release candidates in addition to stable releases"
    },
    "firmwareFlasherOptionLoading": {
        "message": "Loading ..."
    },
    "firmwareFlasherOptionLabelBuildTypeRelease": {
        "message": "Release"
    },
    "firmwareFlasherOptionLabelBuildTypeReleaseCandidate": {
        "message": "Release And Release Candidate"
    },
    "firmwareFlasherOptionLabelBuildTypeDevelopment": {
        "message": "Development"
    },
    "firmwareFlasherOptionLabelBuildTypeAKK3_3": {
        "message": "3.3 AKK & RDQ VTX Patch"
    },
    "firmwareFlasherOptionLabelBuildTypeAKK3_4": {
        "message": "3.4 AKK & RDQ VTX Patch"
    },
    "firmwareFlasherOptionLabelSelectFirmware": {
        "message": "Choose a Firmware / Board"
    },
    "firmwareFlasherOptionLabelSelectBoard": {
        "message": "Choose a Board"
    },
    "firmwareFlasherOptionLabelSelectFirmwareVersion": {
        "message": "Choose a Firmware version"
    },
    "firmwareFlasherOptionLabelSelectFirmwareVersionFor": {
        "message": "Choose a Firmware version for"
    },
    "firmwareFlasherButtonLoadLocal": {
        "message": "Load Firmware [Local]"
    },
    "firmwareFlasherButtonLoadOnline": {
        "message": "Load Firmware [Online]"
    },
    "firmwareFlasherButtonDownloading": {
        "message": "Downloading..."
    },
    "firmwareFlasherExitDfu": {
        "message": "Exit DFU Mode"
    },
    "firmwareFlasherFlashFirmware": {
        "message": "Flash Firmware"
    },
    "firmwareFlasherGithubInfoHead": {
        "message": "GitHub Firmware Info"
    },
    "firmwareFlasherCommiter": {
        "message": "Committer:"
    },
    "firmwareFlasherDate": {
        "message": "Date:"
    },
    "firmwareFlasherHash": {
        "message": "Hash:"
    },
    "firmwareFlasherUrl": {
        "message": "Go to GitHub to review this commit..."
    },
    "firmwareFlasherMessage": {
        "message": "Message:"
    },
    "firmwareFlasherWarningText": {
        "message": "Please do <span class=\"message-negative\">not</span> try to flash <strong>non-Betaflight</strong> hardware with this firmware flasher.<br />Do <span class=\"message-negative\">not</span> <strong>disconnect</strong> the board or <strong>turn off</strong> your computer while flashing.<br /><br /><strong>Note: </strong>STM32 bootloader is stored in ROM, it cannot be bricked.<br /><strong>Note: </strong><span class=\"message-negative\">Auto-Connect</span> is always disabled while you are inside firmware flasher.<br /><strong>Note: </strong>Make sure you have a backup; some upgrades/downgrades will wipe your configuration.<br /><strong>Note:</strong> If you have problems flashing <strong>try disconnecting all cables from your FC</strong> first, try rebooting, upgrade drivers.<br /><strong>Note:</strong> When flashing boards that have directly connected USB sockets (most newer boards) ensure you have read the USB Flashing section of the Betaflight manual and have the correct software and drivers installed"
    },
    "firmwareFlasherRecoveryHead": {
        "message": "<strong>Recovery / Lost communication</strong>"
    },
    "firmwareFlasherRecoveryText": {
        "message": "If you have lost communication with your board follow these steps to restore communication: <ul><li>Power off</li><li>Enable 'No reboot sequence', enable 'Full chip erase'.</li><li>Jumper the BOOT pins or hold BOOT button.</li><li>Power on (activity LED will NOT flash if done correctly).</li><li>Install all STM32 drivers and Zadig if required (see <a href=\"https://github.com/betaflight/betaflight/wiki/Installing-Betaflight\"target=\"_blank\" rel=\"noopener noreferrer\">USB Flashing</a> section of Betaflight manual).</li><li>Close configurator, Restart Configurator.</li><li>Release BOOT button if your FC has one.</li><li>Flash with correct firmware (using manual baud rate if specified in your FC's manual).</li><li>Power off.</li><li>Remove BOOT jumper.</li><li>Power on (activity LED should flash).</li><li>Connect normally.</li></ul>"
    },
    "firmwareFlasherButtonLeave": {
        "message": "Leave Firmware Flasher"
    },
    "firmwareFlasherFirmwareNotLoaded": {
        "message": "Firmware not loaded"
    },
    "firmwareFlasherFirmwareLocalLoaded": {
        "message": "Loaded Local Firmware: {{filename}} ({{bytes}} bytes)"
    },
    "firmwareFlasherFirmwareOnlineLoaded": {
        "message": "Loaded Online Firmware: {{filename}} ({{bytes}} bytes)"
    },
    "firmwareFlasherHexCorrupted": {
        "message": "HEX file appears to be corrupted"
    },
    "firmwareFlasherConfigCorrupted": {
        "message": "Config file appears to be corrupted, ASCII accepted (chars 0-255)",
        "description": "shown in the progress bar at the bottom, be brief"
    },
    "firmwareFlasherConfigCorruptedLogMessage": {
        "message": "Config file appears to be corrupted, ASCII accepted (chars 0-255), characters outside of this range are allowed as comments",
        "description": "shown in the log, more wordy"
    },
    "firmwareFlasherRemoteFirmwareLoaded": {
        "message": "<span class=\"message-positive\">Remote Firmware loaded, ready for flashing</span>"
    },
    "firmwareFlasherFailedToLoadOnlineFirmware": {
        "message": "Failed to load remote firmware"
    },
    "firmwareFlasherFailedToLoadUnifiedConfig": {
        "message": "Failed to load remote config for {{remote_file}}"
    },
    "firmwareFlasherLegacyLabel": {
        "message": "{{target}} (Legacy)",
        "description": "If we have a Unified target and a old style target available, we are labeling the older one"
    },
    "firmwareFlasherNoFirmwareSelected": {
        "message": "<b>No firmware selected to load</b>"
    },
    "firmwareFlasherNoValidPort": {
        "message": "<span class=\"message-negative\">Please select valid serial port</span>"
    },
    "firmwareFlasherWritePermissions": {
        "message": "You don't have <span class=\"message-negative\">write permissions</span> for this file"
    },
    "firmwareFlasherFlashTrigger": {
        "message": "Detected: <strong>$1</strong> - triggering flash on connect"
    },
    "firmwareFlasherVerifyBoard": {
        "message": "<h3>Firmware mismatch</h3><br />The connected board is <strong>{{verified_board}}</strong> while you selected <strong>{{selected_board}}</strong>.<br /><br />Do you want to continue flashing?",
        "description": "Make a quick connection to read firmware target and never flash a wrong target again"
    },
    "firmwareFlasherBoardVerificationSuccess": {
        "message": "Configurator has <span class=\"message-positive\">successfully</span> detected and verified the board: <strong>{{boardName}}</strong>",
        "description": "Board verification has succeeded."
    },
    "firmwareFlasherBoardVerficationTargetNotAvailable": {
        "message": "Configurator has detected the board: <strong>{{boardName}}</strong> but no official Betaflight target was found",
        "description": "Board verification has succeeded, but the target is not available as offical Betaflight target."
    },
    "firmwareFlasherBoardVerificationFail": {
        "message": "Configurator <span class=\"message-negative\">failed</span> to verify the board, if this does not work please try switching tab slowly to retry, make a new usb connection or connect first if you might have forgotten to apply custom defaults",
        "description": "Sometimes MSP values cannot be read from firmware correctly"
    },
    "firmwareFlasherButtonAbort": {
        "message": "Abort"
    },
    "firmwareFlasherButtonContinue": {
        "message": "Continue"
    },
    "firmwareFlasherDetectBoardButton": {
        "message": "Auto-detect"
    },
    "firmwareFlasherDetectBoardDescriptionHint": {
        "message": "Auto-detect only works when not in DFU mode and when MSP communication is working. Sometimes you have to retry a few times or even reconnect USB. Try connecting as normal first as you could have forgotten to apply custom defaults. Please reboot after flashing - replug your USB."
    },
    "firmwareFlasherDetectBoardQuery": {
        "message": "Query board information to preselect right firmware"
    },
    "unstableFirmwareAcknoledgementDialog": {
        "message": "You are about to flash a <strong>development build of the firmware</strong>. These builds are a work in progress, and any of the following can be the case:<strong><ul><li>the firmware does not work at all;</li><li>the firmware is not flyable;</li><li>there are safety issues with the firmware, for example flyaways</li><li>the firmware can cause the flight controller to become unresponsive, or damaged</li></ul></strong>If you proceed with flashing this firmware, <strong>you are assuming full responsibility for the risk of any of the above happening</strong>. Furthermore you acknowledge that it is necessary to perform <strong>thorough bench tests with props off</strong> before any attempts to fly this firmware."
    },
    "unstableFirmwareAcknoledgementAcknowledge": {
        "message": "I have read the above and <strong>I assume full responsibility<strong> for flashing unstable firmware"
    },
    "unstableFirmwareAcknoledgementFlash": {
        "message": "Flash"
    },
    "firmwareFlasherPreviousDevice": {
        "message": "Detected: <strong>$1</strong> - previous device still flashing, please replug to try again"
    },

    "ledStripHelp": {
        "message": "The flight controller can control colors and effects of individual LEDs on a strip.<br />Configure LEDs on the grid, configure wiring order then attach LEDs on your aircraft according to grid positions. LEDs without wire ordering number will not be saved.<br />Double-click on a color to edit the HSV values."
    },
    "ledStripButtonSave": {
        "message": "Save"
    },
    "ledStripColorSetupTitle": {
        "message": "Color setup",
        "description": "Color setup title of the led strip"
    },
    "ledStripH": {
        "message": "H",
        "description": "Abbreviation of Hue in HSV (Hue, Saturation, Brightness) color model"
    },
    "ledStripS": {
        "message": "S",
        "description": "Abbreviation of Saturation in HSV  (Hue, Saturation, Brightness) color model"
    },
    "ledStripV": {
        "message": "V",
        "description": "Abbreviation of Brightness in HSV  (Hue, Saturation, Brightness) color model"
    },
    "ledStripRemainingText": {
        "message": "Remaining",
        "description": "In the LED STRIP, text next the counter of leds remaining"
    },
    "ledStripClearSelectedButton": {
        "message": "Clear selected",
        "description": "In the LED STRIP, clear selected leds"
    },
    "ledStripClearAllButton": {
        "message": "Clear ALL",
        "description": "In the LED STRIP, clear all leds"
    },
    "ledStripEepromSaved": {
        "message": "EEPROM <span class=\"message-positive\">saved</span>"
    },
    "ledStripVtxOverlay": {
        "message": "VTX (uses vtx frequency to assign color)"
    },
    "ledStripFunctionSection": {
        "message": "LED Functions"
    },
    "ledStripFunctionTitle": {
        "message": "Function"
    },
    "ledStripFunctionNoneOption": {
        "message": "None",
        "description": "One of the modes of the Led Strip"
    },
    "ledStripFunctionColorOption": {
        "message": "Color",
        "description": "One of the modes of the Led Strip"
    },
    "ledStripFunctionModesOption": {
        "message": "Modes &amp; Orientation",
        "description": "One of the modes of the Led Strip"
    },
    "ledStripFunctionArmOption": {
        "message": "Arm State",
        "description": "One of the modes of the Led Strip"
    },
    "ledStripFunctionBatteryOption": {
        "message": "Battery",
        "description": "One of the modes of the Led Strip"
    },
    "ledStripFunctionRSSIOption": {
        "message": "RSSI",
        "description": "One of the modes of the Led Strip"
    },
    "ledStripFunctionGPSOption": {
        "message": "GPS",
        "description": "One of the modes of the Led Strip"
    },
    "ledStripFunctionRingOption": {
        "message": "Ring",
        "description": "One of the modes of the Led Strip"
    },
    "ledStripColorModifierTitle": {
        "message": "Color modifier"
    },
    "ledStripModeColorsTitle": {
        "message": "Mode colors"
    },
    "ledStripModeColorsModeOrientation": {
        "message": "Orientation",
        "description": "One of the modes in Color Mode in Led Strip"
    },
    "ledStripModeColorsModeHeadfree": {
        "message": "Headfree",
        "description": "One of the modes in Color Mode in Led Strip"
    },
    "ledStripModeColorsModeHorizon": {
        "message": "Horizon",
        "description": "One of the modes in Color Mode in Led Strip"
    },
    "ledStripModeColorsModeAngle": {
        "message": "Angle",
        "description": "One of the modes in Color Mode in Led Strip"
    },
    "ledStripModeColorsModeMag": {
        "message": "Mag",
        "description": "One of the modes in Color Mode in Led Strip"
    },
    "ledStripModeColorsModeBaro": {
        "message": "Baro",
        "description": "One of the modes in Color Mode in Led Strip"
    },
    "ledStripDirN": {
        "message": "N",
        "description": "North direction in Color Mode in Led Strip"
    },
    "ledStripDirE": {
        "message": "E",
        "description": "East direction in Color Mode in Led Strip"
    },
    "ledStripDirS": {
        "message": "S",
        "description": "South direction in Color Mode in Led Strip"
    },
    "ledStripDirW": {
        "message": "W",
        "description": "West direction in Color Mode in Led Strip"
    },
    "ledStripDirU": {
        "message": "U",
        "description": "Up direction in Color Mode in Led Strip"
    },
    "ledStripDirD": {
        "message": "D",
        "description": "Down direction in Color Mode in Led Strip"
    },
    "ledStripModesOrientationTitle": {
        "message": "LED Orientation ('Modes &amp; Orientation') and Color",
        "description": "One of the modes in Color Mode in Led Strip"
    },
    "ledStripModesSpecialColorsTitle": {
        "message": "Special colors",
        "description": "One of the modes in Color Mode in Led Strip"
    },
    "ledStripModeColorsModeDisarmed": {
        "message": "Disarmed",
        "description": "One of the modes in Color Mode in Led Strip"
    },
    "ledStripModeColorsModeArmed": {
        "message": "Armed",
        "description": "One of the modes in Color Mode in Led Strip"
    },
    "ledStripModeColorsModeAnimation": {
        "message": "Animation",
        "description": "One of the modes in Color Mode in Led Strip"
    },
    "ledStripModeColorsModeBlinkBg": {
        "message": "Blink background",
        "description": "One of the modes in Color Mode in Led Strip"
    },
    "ledStripModeColorsModeGPSNoSats": {
        "message": "GPS: no sats",
        "description": "One of the modes in Color Mode in Led Strip"
    },
    "ledStripModeColorsModeGPSNoLock": {
        "message": "GPS: no lock",
        "description": "One of the modes in Color Mode in Led Strip"
    },
    "ledStripModeColorsModeGPSLocked": {
        "message": "GPS: locked",
        "description": "One of the modes in Color Mode in Led Strip"
    },
    "ledStripWiring": {
        "message": "LED Strip Wiring",
        "description": "One of the modes in Led Strip"
    },
    "ledStripWiringMode": {
        "message": "Wire Ordering Mode",
        "description": "One of the wiring modes in Led Strip"
    },
    "ledStripWiringClearControl": {
        "message": "Clear selected",
        "description": "Control button in the wiring modes in Led Strip"
    },
    "ledStripWiringClearAllControl": {
        "message": "Clear ALL Wiring",
        "description": "Control button in the wiring modes in Led Strip"
    },
    "ledStripWiringMessage": {
        "message": "LEDs without wire ordering number will not be saved.",
        "description": "Message in the wiring modes in Led Strip"
    },
    "ledStripVtxFunction": {
        "message": "Larson scanner"
    },
    "ledStripBlinkTitle": {
        "message": "Blink"
    },
    "ledStripBlinkAlwaysOverlay": {
        "message": "Blink always"
    },
    "ledStripBlinkLandingOverlay": {
        "message": "Blink on landing"
    },
    "ledStripOverlayTitle": {
        "message": "Overlay"
    },
    "ledStripWarningsOverlay": {
        "message": "Warnings"
    },
    "ledStripIndecatorOverlay": {
        "message": "Indicator (uses position on matrix)"
    },
    "colorBlack": {
        "message": "black"
    },
    "colorWhite": {
        "message": "white"
    },
    "colorRed": {
        "message": "red"
    },
    "colorOrange": {
        "message": "orange"
    },
    "colorYellow": {
        "message": "yellow"
    },
    "colorLimeGreen": {
        "message": "lime green"
    },
    "colorGreen": {
        "message": "green"
    },
    "colorMintGreen": {
        "message": "mint green"
    },
    "colorCyan": {
        "message": "cyan"
    },
    "colorLightBlue": {
        "message": "light blue"
    },
    "colorBlue": {
        "message": "blue"
    },
    "colorDarkViolet": {
        "message": "dark violet"
    },
    "colorMagenta": {
        "message": "magenta"
    },
    "colorDeepPink": {
        "message": "deep pink"
    },
    "controlAxisRoll": {
        "message": "Roll [A]"
    },
    "controlAxisPitch": {
        "message": "Pitch [E]"
    },
    "controlAxisYaw": {
        "message": "Yaw [R]"
    },
    "controlAxisThrottle": {
        "message": "Throttle [T]"
    },
    "controlAxisAux1": {
        "message": "AUX 1"
    },
    "controlAxisAux2": {
        "message": "AUX 2"
    },
    "controlAxisAux3": {
        "message": "AUX 3"
    },
    "controlAxisAux4": {
        "message": "AUX 4"
    },
    "controlAxisAux5": {
        "message": "AUX 5"
    },
    "controlAxisAux6": {
        "message": "AUX 6"
    },
    "controlAxisAux7": {
        "message": "AUX 7"
    },
    "controlAxisAux8": {
        "message": "AUX 8"
    },
    "controlAxisAux9": {
        "message": "AUX 9"
    },
    "controlAxisAux10": {
        "message": "AUX 10"
    },
    "controlAxisAux11": {
        "message": "AUX 11"
    },
    "controlAxisAux12": {
        "message": "AUX 12"
    },
    "controlAxisAux13": {
        "message": "AUX 13"
    },
    "controlAxisAux14": {
        "message": "AUX 14"
    },
    "controlAxisAux15": {
        "message": "AUX 15"
    },
    "controlAxisAux16": {
        "message": "AUX 16"
    },

    "pidTuningBasic": {
        "message": "Basic/Acro"
    },
    "pidTuningYawJumpPrevention": {
        "message": "Yaw Jump Prevention"
    },
    "pidTuningYawJumpPreventionHelp": {
        "message": "Keeps the craft from jumping up at the end of yaws. Higher number gives more damping at the end of yaw moves (works like old yaw D, which was not a real D like on other axis)"
    },
    "pidTuningRcExpoPower": {
        "message": "RC Expo Power"
    },
    "pidTuningRcExpoPowerHelp": {
        "message": "The exponent that is used when calculating RC Expo. In Betaflight versions prior to 3.0, value is fixed at 3."
    },
    "pidTuningLevel": {
        "message": "Angle/Horizon"
    },
    "pidTuningAltitude": {
        "message": "Barometer & Sonar/Altitude"
    },
    "pidTuningMag": {
        "message": "Magnometer/Heading"
    },
    "pidTuningGps": {
        "message": "GPS Navigation"
    },
    "pidTuningStrength": {
        "message": "Strength"
    },
    "pidTuningTransition": {
        "message": "Transition"
    },
    "pidTuningHorizon": {
        "message": "Horizon"
    },
    "pidTuningAngle": {
        "message": "Angle"
    },
    "pidTuningLevelAngleLimit": {
        "message": "Angle Limit"
    },
    "pidTuningLevelSensitivity": {
        "message": "Sensitivity"
    },
    "pidTuningLevelHelp": {
        "message": "The values below change the behaviour of the ANGLE and HORIZON flight modes. Different PID controllers handle the values differently. Please check the documentation."
    },
    "pidTuningMotorOutputLimit": {
        "message": "Motor Output Limit"
    },
    "pidTuningMotorLimit": {
        "message": "Scale Factor [%]"
    },
    "pidTuningMotorLimitHelp": {
        "message": "Percentage reduction in per-motor drive signal.<br><br>Reduces ESC current and motor heat when using higher cell count batteries on high KV motors.<br><br>When using a 6S battery on a craft that with 4S motors, props and tuning, try 66%; when using a 4S battery on a craft intended for 3S, try 75%.<br><br>Be sure that all of your components can support the voltage of the battery you are using."
    },
    "pidTuningCellCount": {
        "message": "Cell Count - for auto Profile switching"
    },
    "pidTuningCellCountHelp": {
        "message": "Automatically activates the first profile that has a cell count equal to that of the connected battery."
    },
    "pidTuningNonProfileFilterSettings": {
        "message": "Profile independent Filter Settings"
    },
    "pidTuningFilterSlidersHelp": {
        "message": "These sliders adjust the Gyro and D-term filters.<br /><br />For more filtering:<br /> - Sliders to left<br> - Lower cutoff frequencies.<br /><br /> Stronger filtering keeps motors cooler by removing more noise, but delays the gyro signal more and may worsen prop-wash or cause resonant oscillations. Less responsive quads eg X-Class do best with stronger filtering. <br><br>For less filtering:<br /> - Sliders to the right<br /> - Higher cutoff frequencies <br><br>Less filtering reduces gyro signal delay, and often improves propwash. Moving the gyro lowpass filter right is usually OK, but moving the D filter to the right is usually not required, and can easily result in very hot motors.",
        "description": "Overall helpicon message for filter tuning sliders"
    },
    "pidTuningSliderLowFiltering": {
        "message": "Less Filtering",
        "description": "Filter tuning slider low header"
    },
    "pidTuningSliderDefaultFiltering": {
        "message": "Default Filtering",
        "description": "Filter tuning slider default header"
    },
    "pidTuningSliderHighFiltering": {
        "message": "More Filtering",
        "description": "Filter tuning slider high header"
    },
    "pidTuningGyroFilterSlider": {
        "message": "Gyro Filter Multiplier:",
        "description": "Gyro filter tuning slider label"
    },
    "pidTuningGyroFilterSliderHelp": {
        "message": "Changes the Gyro Lowpass filter cutoffs.<br /><br />Moving the slider to the left gives stronger Gyro filtering (lower cutoff frequency).<br /><br />Moving the slider to the right gives less Gyro filtering (higher cutoff frequency).<br /><br />When moving the slider to the right to improve propwash handling, BE CAREFUL to not get too radical.  You will allow more noise into both P and D and may get fly-aways or burnt out motors.<br /><br />You may need  to move the slider to left if you have frame resonance issues, bad bearings, beat up props, hot motors, etc.<br /><br />Gyro filtering is applied before, and in addition to, D filtering.",
        "description": "Gyro filter tuning slider helpicon message"
    },
    "pidTuningGyroSliderEnabled": {
        "message": "Use Gyro Slider",
        "description": "Disable or enable Gyro Filter Tuning Slider"
    },
    "pidTuningDTermFilterSlider": {
        "message": "D Term Filter Multiplier:",
        "description": "D Term filter tuning slider label"
    },
    "pidTuningDTermFilterSliderHelp": {
        "message": "Changes the D-term Lowpass Filter cutoffs.<br /><br />Moving the slider to the left gives stronger D filtering (lower cutoff frequency).<br /><br />Moving the slider to the right gives less filtering (higher cutoff frequency).<br /><br />D-term is the most sensitive PID element to noise and resonance. It can amplify high frequency noise by 10x to 100x. That's why D filter cutoffs are much lower than the gyro filters.<br /><br />D-term filtering is applied after, and in addition to, the gyro filtering. The default D filtering is optimal for most quads and rarely needs changing.<br /><br />Moving this slider to the left reduces motor heat in noisy quads and with high PID 'D' tunes, but we may see more propwash and lower frequency D resonances.<br /><br />Moving the slider to the right is not recommended, but may improve propwash on clean builds.  It may cause motor grinding on arming, sudden resonances in-flight, and serious motor overheating.",
        "description": "D Term filter tuning slider helpicon message"
    },
    "pidTuningDTermSliderEnabled": {
        "message": "Use D Term Slider",
        "description": "Disable or enable D Term Filter Tuning Slider"
    },
    "pidTuningPidSlidersHelp": {
        "message": "Sliders to adjust the quad flight characteristics (PID gains)<br /><br />Damping (D gain): Resists fast movement, minimises P oscillation.<br /><br />Tracking (P and I gain): Enchances the responsiveness of the quad, if too high may cause trilling or oscillation.<br /><br />Stick Response (Feedforward): Increases the responsiveness of the quad to faster stick movements.<br /><br />Drift - Wobble (I gain, expert):  Fine adjustment of I.<br /><br />Dynamic D (D Max, expert):  Sets the maximum amount that D can be boosted to during fast movements.<br /><br />Pitch Damping (Pitch:Roll D ratio, expert): Increases the amount of damping on pitch relative to roll.<br /><br />Pitch Tracking (Pitch:Roll P, I and F ratio, expert): Increases stabilising strenght on pitch relative to roll.<br /><br />Master Multiplier (all gains, expert): Raises or Lowers all the PID gains, keeping their proportions constant.",
        "description": "Overall helpicon message for PID tuning sliders"
    },
    "pidTuningSliderWarning": {
        "message": "<span class=\"message-negative\">CAUTION</span>: Current slider positions may cause flyaways, motor damage or unsafe craft behaviour. Please proceed with caution.",
        "description": "Warning shown when tuning slider are above safe limits"
    },
    "pidTuningSlidersDisabled": {
        "message": "<strong>Note:</strong> Sliders are disabled because values were changed manually. Clicking the '$t(pidTuningSliderEnableButton.message)' button will activate them again. This will reset the values and any unsaved changes will be lost.",
        "description": "Tuning sliders disabled note when manual changes are detected"
    },
    "pidTuningGyroSliderDisabled": {
        "message": "<strong>Note:</strong> Gyro Slider is disabled because values were changed manually. Clicking the '$t(pidTuningGyroSliderEnableButton.message)' button will activate them again. This will reset the values and any unsaved changes will be lost.",
        "description": "Gyro Tuning sliders disabled note when manual changes are detected"
    },
    "pidTuningDTermSliderDisabled": {
        "message": "<strong>Note:</strong> DTerm Slider is disabled because values were changed manually. Clicking the '$t(pidTuningDTermSliderEnableButton.message)' button will activate them again. This will reset the values and any unsaved changes will be lost.",
        "description": "DTerm Tuning sliders disabled note when manual changes are detected"
    },
    "pidTuningPidSlidersDisabled": {
        "message": "<strong>Note:</strong> Sliders are disabled. Clicking the '$t(pidTuningSliderEnableButton.message)' button will change the PID values to match your previously saved slider position.",
        "description": "Tuning sliders disabled note"
    },
    "pidTuningSliderEnableButton": {
        "message": "Enable Sliders",
        "description": "Button label for enabling sliders"
    },
    "pidTuningSlidersNonExpertMode": {
        "message": "<strong>Note:</strong> Sliders range is restricted because you are not in expert mode. This range should be suitable for most builds and beginners.",
        "description": "Sliders restricted message"
    },
    "pidTuningPidSlidersNonExpertMode": {
        "message": "<strong>Note:</strong> Slider access and range is restricted because you are not in expert mode. Basic mode should be suitable for most builds and beginners.",
        "description": "Firmware Pid sliders restricted message"
    },
    "pidTuningFilterSlidersNonExpertMode": {
        "message": "<strong>Note:</strong> Sliders range is restricted because you are not in expert mode. This range should be suitable for most builds and beginners.",
        "description": "Firmware filter sliders restricted message"
    },
    "pidTuningSlidersExpertSettingsDetectedNote": {
        "message": "<strong>Note:</strong> Slider(s) are disabled because current values are outside the Basic Mode adjustment range. Switch to Expert Mode to make changes",
        "desciption": "Slider expert settings detected while in non-expert mode"
    },
    "pidTuningSliderLow": {
        "message": "Low",
        "description": "Tuning Slider Low header"
    },
    "pidTuningSliderDefault": {
        "message": "Default",
        "description": "Tuning Slider Default header"
    },
    "pidTuningSliderHigh": {
        "message": "High",
        "description": "Tuning Slider High header"
    },
    "pidTuningMasterSlider": {
        "message": "Master Multiplier:",
        "description": "Master tuning slider label"
    },
    "pidTuningMasterSliderHelp": {
        "message": "Increases all PID parameters equally. Don't change this slider unless you run out of adjustment on the other sliders. Typically this is only needed for low authority or high moment of inertia (MoI) quads like X-Class or cinelifter builds. Too much master gain may cause trilling oscillations or hot motors.",
        "description": "Master Gain tuning slider helpicon message"
    },
    "pidTuningPDRatioSlider": {
        "message": "PD Balance:",
        "description": "PD balance tuning slider label"
    },
    "pidTuningPDRatioSliderHelp": {
        "message": "Changes D and D max. Relatively high D will dampen stick responsiveness and may make motors hot, but should help control P-term oscillations and will improve prop-wash oscillation.<br /><br />Relatively low D-term gives quicker stick responsiveness, but will weaken prop-wash performance and reacting to external forces (wind).",
        "description": "D_term tuning slider helpicon message"
    },
    "pidTuningPDGainSlider": {
        "message": "P and D Gain:",
        "description": "P and D Gain tuning slider label"
    },
    "pidTuningPDGainSliderHelp":{
        "message": "Lower P and D Gain will result in cooler motors but also in more prop-wash oscillation. Too low value may cause the quad to be unstable.<br /><br />P and D terms work together to reduce prop-wash.<br /><br />Higher values will increase motor heat and could increase oscillations during smooth forward flight due to higher D term gains.",
        "description": "P and D gain tuning slider helpicon message"
    },
    "pidTuningResponseSliderLegacy": {
        "message": "Stick Response Gain:",
        "description": "Response tuning slider label"
    },
    "pidTuningResponseSliderLegacyHelp": {
        "message": "Lower FF values will worsen the stick response and may result in slow bounceback at the end of a flip or roll due to the quad lagging the sticks too much and I-term winding up and cousing 'I-term Bounceback'.<br /><br />Higher FF values will give snappier stick responses in sharp moves. Excessively high FF values can cause overshoots and fast bounceback at the end of a flip or roll.<br /><br />Note:<br />The feature I-term Relax can stop the I-term from winding up on stick move for a low authority quads or if low Stick Response Gains are used.",
        "description": "Stick response gain tuning slider helpicon message"
    },

    "pidTuningDGainSlider": {
        "message": "Damping:<br /><i><small>D Gains</small></i>",
        "description": "D Gain (Damping) tuning slider label"
    },
    "pidTuningDGainSliderHelp": {
        "message": "Relatively high D-gain will dampen stick responsiveness and may make motors hot, but should help control fast oscillations and willimprove prop-wash.<br /><br />Relatively low D-term gives quicker stick responsiveness, but will weaken prop-wash performance and reacting to external forces (wind).",
        "description": "D gain balance tuning slider helpicon message"
    },
    "pidTuningPIGainSlider": {
        "message": "Tracking:<br /><i><small>P & I Gains</small></i>",
        "description": "P and I Gain (Stability) tuning slider label"
    },
    "pidTuningPIGainSliderHelp": {
        "message": "Increase the Tracking slider to sharpen the quads response to your commands and also outside influences; avoiding the nose of the quad going off course in any condition.<br /><br />Lower ‘Tracking’ values will have lots of bobbles and will go off course on stick moves and in prop wash. High ‘Tracking’ may result in oscillation and fast bounceback (hard to see, but you canhear). Excessive Tracking may result in oscillations and hot motors.",
        "description": "P and I gain tuning slider helpicon message"
    },
    "pidTuningResponseSlider": {
        "message": "Stick Response:<br /><i><small>FF Gains</small></i>",
        "description": "Response tuning slider label"
    },
    "pidTuningResponseSliderHelp": {
        "message": "Lower Stick Response will increase the latency of the quad movements to commands and may result in slow bounceback at the end of a flip or roll.<br><br>Higher Stick Response will give snappier quad response to sharp stick moves. Too much Stick Response can cause overshoots at the end of a flip or roll.<br /><br /><strong>Note:</strong><br />“I-term Relax” can reduce bounceback for low authority quads or if low Stick Response Gains are used.",
        "description": "Stick response gain tuning slider helpicon message"
    },
    "pidTuningIGainSlider": {
        "message": "Drift - Wobble:<br /><i><small>I Gains</small></i>",
        "description": "I-term slider label"
    },
    "pidTuningIGainSliderHelp": {
        "message": "Increases or decreases I. Higher I may improve tracking in spiral turns, orbits, or 0% throttle commands. Too much I, particularly with not enough P, may cause wobbles or bounceback after flips/rolls or on chopping the throttle to 0%.<br /><br />Generally you want the ‘Drift – Wobble’ slider to be as high as it can be to keep the quad tracking in spiral turns, orbits, ect... but not so high that you start to see wobbles on chopping the throttleto 0%.<br /><br /><strong>Note:</strong><br />If you experience bounceback at any time that is easy to see, make sure that “I-term Relax” is enabled, and try lowering the iterm_relax_cutoff value.",
        "description": "I-gain Gain tuning slider helpicon message"
    },
    "pidTuningDMaxGainSlider": {
        "message": "Dynamic Damping:<br /><i><small>D Max</small></i>",
        "description": "D Min slider label"
    },
    "pidTuningDMaxGainSliderHelp": {
        "message": "Increases D max, the maximum amount that D can increase to during faster movements.<br /><br />For race quads, where the main Damping slider has been set low to minimize motor heat, moving this slider to the right will improve overshoot control for quick direction changes.<br /><br />For HD or cinematic quads, instability in forward flight is best addressed by moving the Damping slider (not the Dynamic Damping slider) to the right. Check for motor heat and listen for weird noises during quick inputs when moving this slider to the right.<br /><br />For freestyle quads, especially heavier builds, moving this slider to the right may help control overshoot in flips and rolls.<br /><br /><strong>Note:</strong><br />Generally overshoot in flips and rolls is due to not enough 'i-Term Relax', or motor desyncs, or inadequate authority (a.k.a. Motor Saturation). If you find that moving the Damping Boost slider to the right doesn't improve flip or roll overshoot, put it back to the normal position, and seek out the reason for the overshoot or wobble.",
        "description": "D_min slider helpicon message"
    },
    "pidTuningRollPitchRatioSlider": {
        "message": "Pitch Damping:<br /><i><small>Pitch:Roll D</small></i>",
        "description": "Pitch-Roll Ratio slider label"
    },
    "pidTuningRollPitchRatioSliderHelp": {
        "message": "Increases Damping (D) on the Pitch axis ONLY, i.e, for Pitch relative to Roll. Helps control Pitch specific overshooting or bounce-back.<br /><br />Quads with 'heavier' moment of inertia on the Pitch axis generally need more Damping authority (since Pitch has more inertia and accumulates more momentum).<br /><br />Tune the master 'Damping' and/or 'Tracking' sliders first, until you get good Roll axis behavior. Then use the Pitch sliders (increase or decrease) to fine tune the Pitch axis without affecting Roll.",
        "description": "Pitch-Roll Ratio tuning slider helpicon message"
    },
    "pidTuningPitchPIGainSlider": {
        "message": "Pitch Tracking:<br><i><small>Pitch:Roll P, I & FF</small></i>",
        "description": "Pitch P & I slider label"
    },
    "pidTuningPitchPIGainSliderHelp": {
        "message": "Increases the Tracking strength on the Pitch axis ONLY, by changing Pitch P and I values relative to Roll. Allows stronger tracking authority on the Pitch axis relative to Roll.<br /><br />Increase to stabilise pitch (nose) bobble with sharp pitch inputs or throttle chops. Also consider raising Anti-Gravity gains.<br /><br />Tune the master 'Damping' and/or 'Tracking' sliders first, until you get good Roll axis behaviour. Then use the Pitch sliders (increase or decrease) to fine tune the Pitch axis without affecting Roll.",
        "description": "Pitch P & I Gain tuning slider helpicon message"
    },
    "pidTuningGyroLowpassFiltersGroup": {
        "message": "Gyro Lowpass Filters"
    },
    "pidTuningGyroLowpassType": {
        "message": "Gyro Lowpass 1 Filter Type"
    },    
    "pidTuningGyroLowpass": {
        "message": "Gyro Lowpass 1"
    },
    "pidTuningGyroLowpassHelp": {
        "message": "The first of two Gyro lowpass filters.<br /><br />The use of gyro lowpass 1 in dynamic mode was important with the earlier dynamic notch code.  Gyro lowpass 1 can usually be disabled completely in firmware 4.3 when RPM filtering is used, unless the gyro has no internal hardware filtering.<br /><br />In dynamic mode, filtering will be stronger at low throttle, with less filtering and less delay as throttle increases. The transition from low to high cutoff will happen earlier, as throttle increases, with higher Gyro lowpass expo values.<br /><br />In static mode, the cutoff frequency is fixed.<br /><br />Filter type defaults to PT1. Higher order filtering is rarely required.",
        "description": "Help icon for the Gyro Lowpass 1 Filter"
    },
    "pidTuningGyroLowpassMode": {
        "message": "Mode"
    },
    "pidTuningLowpassStatic": {
        "message": "STATIC"
    },
    "pidTuningLowpassDynamic": {
        "message": "DYNAMIC"
    },
    "pidTuningLowpassFilterType": {
        "message": "Filter Type"
    },
    "pidTuningGyroLowpassDyn": {
        "message": "Gyro Lowpass Dynamic Filter"
    },
    "pidTuningMinCutoffFrequency": {
        "message": "Min Cutoff Frequency [Hz]"
    },
    "pidTuningMaxCutoffFrequency": {
        "message": "Max Cutoff Frequency [Hz]"
    },
    "pidTuningGyroLowpassDynType": {
        "message": "Gyro Lowpass 1 Dynamic Filter Type"
    },
    "pidTuningGyroLowpass2": {
        "message": "Gyro Lowpass 2"
    },
    "pidTuningGyroLowpass2Help": {
        "message": "The second of two Gyro lowpass filters.<br /><br />This filter runs in the gyro loop, filtering the signal before it enters the PID loop. It is always in static (fixed cutoff) mode.<br /><br />If the PID loop frequency is less than the gyro loop frequency, eg a 4k PID loop with an 8k gyro loop, this filter should be retained to prevent aliasing issues due to 8k->4k downsampling.<br /><br />A single gyro lowpass 2 configuration, set to somewhere 500 and 1000Hz, works well for Betaflight 4.3 or higher, for clean builds with RPM filtering active and at least default D filtering.",
        "description": "Gyro lowpass filter helpicon message"
    },
    "pidTuningGyroLowpassFilterHelp": {
        "message": "Gyro lowpass filters attenuate higher frequency noise to keep it out of the PID loop. There are two independently configurable gyro filters; by default both are active.<br /><br />With RPM filtering, the gyro filter slider can often be moved some way to the right, or alternatively a single static gyro lowpass filter at 500hz may be sufficient.<br /><br />A quad will have less propwash with the least gyro filter delay.<br /><br />Always check for motor heat when shifting sliders to the right. With minimal gyro filtering, it is essential to have enough D filtering! Take care!",
        "description": "Gyro lowpass filter helpicon message"
    },
    "pidTuningDTermLowpassFilterHelp": {
        "message": "D-term lowpass filters attenuate higher frequency noise and resonances that would otherwise be amplified by D gain.<br /><br />There are two D filters, and their effects are additive. Both are required in nearly all quads, though a single PT2 may be used in place of dual PT1's.<br /><br />Generally, the quad will fly best and have the least propwash when configured to have the least filter delay (sliders to the right, higher cutoff values).  However, particularly with D filters, sliders to the right can greatly increase the chance of getting hot motors.<br /><br />It is very easy to burn motors if you don't have enough D filtering - take care!",
        "description": "D-term lowpass filter helpicon message"
    },
    "pidTuningGyroNotchFiltersGroup": {
        "message": "Gyro Notch Filters"
    },
    "pidTuningGyroNotchFilter": {
        "message": "Gyro Notch Filter 1"
    },
    "pidTuningGyroNotchFilterHelp": {
        "message": "Applies a static (constant frequency) notch filter to Gyro, at the specified Center frequency. <br /><br />May be useful for isolated, constant frequency resonances that affect both P and D. <br /><br />To be useful, the resonant frequency must be constant across the throttle range.<br /><br />Notch width is set by the cutoff frequency. Cutoff should typically be set between 10% and 40% below centre frequency. Use the tightest filter range that controls the resonance.  Avoid setting notch filters below 100hz except in special circumstances.<br /><br />Static notch filters are rarely required in 4.3."
    },
    "pidTuningGyroNotchFilter2": {
        "message": "Gyro Notch Filter 2"
    },
    "pidTuningGyroNotchFilter2Help": {
        "message": "Applies a second static (constant frequency) notch filter to Gyro.<br /><br />This is rarely required, and should only be used as a last resort to combat a second fixed frequency resonance line that can't be controlled by other means."
    },
    "pidTuningCenterFrequency": {
        "message": "Center Frequency [Hz]"
    },
    "pidTuningCutoffFrequency": {
        "message": "Cutoff Frequency [Hz]"
    },
    "pidTuningNotchFilterHelp": {
        "message": "A Notch Filter is a symmetrical, narrow, high-cut filter, with center and cutoff parmaeters.<br /><br />The Center value is the center frequency of the filter. The Cutoff value is the low-side -3dB cutoff frequency.<br /><br />For example, a Notch Cutoff of 160 with a Notch Center of 260 returns a wide notch with a -3dB range from 160-360Hz and strongest attenuation around 260hz.",
        "description": "Notch filter helpicon message"
    },
    "pidTuningDynamicNotchFilterGroup": {
        "message": "Dynamic Notch Filter"
    },
    "pidTuningDynamicNotchFilterHelp": {
        "message": "The Dynamic Notch Filter tracks peak motors noise frequency peaks and places notch filters at those frequencies, independently for each axis."
    },
    "pidTuningMultiDynamicNotchFilterHelp": {
        "message": "The Dynamic Notch Filter tracks peak gyro noise frequencies and places one to five notch filters with their center at these frequencies on every axis."
    },
    "pidTuningDynamicNotchFilterDisabledWarning": {
        "message": "<strong>Notice:</strong> The dynamic notch filter is disabled. In order to configure and use it, please enable the 'DYNAMIC_FILTER' feature in the '$t(configurationFeatures.message)' section of the '$t(tabConfiguration.message)' tab. Also make sure the PID looprate is at least 2kHz."
    },
    "pidTuningDynamicNotchRange": {
        "message": "Dynamic Notch Filter Range"
    },
    "pidTuningDynamicNotchWidthPercent": {
        "message": "Dynamic Notch Width Percent"
    },
    "pidTuningDynamicNotchQ": {
        "message": "Q factor"
    },
    "pidTuningDynamicNotchMinHz": {
        "message": "Min Frequency [Hz]"
    },
    "pidTuningDynamicNotchMaxHz": {
        "message": "Max Frequency [Hz]"
    },
    "pidTuningDynamicNotchCount": {
        "message": "Notch Count"
    },
    "pidTuningDynamicNotchRangeHelp": {
        "message": "The dynamic notch has three frequency ranges in which it can operate: LOW(80-330hz) for lower revving quads like 6+ inches, MEDIUM(140-550hz) for a normal 5 inch quad, HIGH(230-800hz) for very high revving 2.5-3 inch quads. AUTO option selects the range depending on the value of the Gyro Dynamic Lowpass 1 Filter's max cutoff frequency."
    },
    "pidTuningDynamicNotchWidthPercentHelp": {
        "message": "This sets the width between two dynamic notch filters. Setting it at 0 will disable the second dynamic notch filter and will reduce filter delay, however it may make motor temperatures higher."
    },
    "pidTuningDynamicNotchQHelp": {
        "message": "Q factor adjust how narrow or wide the dynamic notch filters are. Higher value makes it narrower and more precise and lower value makes it wider and broader. Having a really low value will greatly increase filter delay."
    },
    "pidTuningDynamicNotchMinHzHelp": {
        "message": "Set this to the lowest incoming noise frequency that is needed to be controlled by the dynamic notch."
    },
    "pidTuningDynamicNotchMaxHzHelp": {
        "message": "Set this to the highest incoming noise frequency that is needed to be controlled by the dynamic notch."
    },
    "pidTuningGyroLowpassType": {
        "message": "Gyro Lowpass 1 Filter Type"
    },    
    "pidTuningDynamicNotchCountHelp": {
        "message": "Sets the number of dynamic notches per axis. With RPM filter enabled a value of 1 or 2 is recommended. Without RPM filter a value of 4 or 5 is recommended. Lower numbers will reduce filter delay, however it may increase motor temperature."
    },
    "pidTuningRpmFilterGroup": {
        "message": "Gyro RPM Filter",
        "description": "Header text for the RPM Filter group"
    },
    "pidTuningRpmFilterHelp": {
        "message": "RPM filtering is a bank of notch filters on gyro which use the RPM telemetry data to remove motor noise with surgical precision.<br /><br /><b><span class=\"message-positive\">IMPORTANT</span>: The ESC must support the Bidirectional DShot protocol and the value of the $t(configurationMotorPoles.message) in the $t(tabMotorTesting.message) tab must be correct for this filter to work.</b>",
        "description": "Header text for the RPM Filter group"
    },
    "pidTuningRpmHarmonics": {
        "message": "Gyro RPM Filter Harmonics Number",
        "description": "Text for one of the parameters of the RPM Filter"
    },
    "pidTuningRpmHarmonicsHelp": {
        "message": "Number of harmonics per motor. A value of 3 (recommended for most quads) will generate 3 notch filters, per motor for each axis, totaling 36 notches. One at the base motor frequency and two harmonics at multiples of that base frequency.",
        "description": "Help text for one of the parameters of the RPM Filter"
    },
    "pidTuningRpmMinHz": {
        "message": "Gyro RPM Filter Min Frequency [Hz]",
        "description": "Text for one of the parameters of the RPM Filter"
    },
    "pidTuningRpmMinHzHelp": {
        "message": "Minimum frequency that will be used by the RPM Filter.",
        "description": "Help text for one of the parameters of the RPM Filter"
    },
    "pidTuningFilterSettings": {
        "message": "Profile dependent Filter Settings"
    },
    "pidTuningDTermLowpass": {
        "message": "D Term Lowpass 1"
    },
    "pidTuningDTermLowpassHelp": {
        "message": "The first of two D-term lowpass filters.<br /><br />In dynamic mode, filtering will be stronger at low throttle, with less filtering and less delay as throttle increases. This helps control motor grinding or unexpected flyways on arming, while reducing delay and propwash after takeoff. The transition from low to high cutoff will happen earlier, as throttle is increased, with higher D-term lowpass expo values.<br /><br />In static mode, the cutoff frequency is fixed.  This is not recommended for D filtering.<br /><br />Filter type defaults to PT1, though some users have used only a single dynamic Biquad filter here, with no second PT1.<br /><br />Changes that result in less D filtering may cause serious motor overheating or flyaways on arming.",
        "description": "Help icon for the DTerm Lowpass 1 Filter"
    },
    "pidTuningDTermLowpassMode": {
        "message": "Mode"
    },
    "pidTuningDTermLowpass2": {
        "message": "D Term Lowpass 2"
    },
    "pidTuningDTermLowpass2Help": {
        "message": "The second of two D-term lowpass filters. <br /><br />This filter is always in static (fixed cutoff) mode.  At least two PT1 lowpass filters, or a single second order filter, are required for D filtering.<br /><br />Usually this cutoff is set to the higher value of the dynamic lowpass 1 range.  This provides second order noise control above that frequency. <br /><br />Changes that result in less D filtering may cause serious motor overheating or flyaways on arming.",
        "description": "Help icon for the DTerm Lowpass 2 Filter"
    },
    "pidTuningDTermLowpassFiltersGroup": {
        "message": "D Term Lowpass Filters"
    },
    "pidTuningDTermLowpassType": {
        "message": "Filter Type"
    },
    "pidTuningStaticCutoffFrequency": {
        "message": "Static Cutoff Frequency [Hz]"
    },
    "pidTuningDTermLowpass2Type": {
        "message": "Filter Type"
    },
    "pidTuningDTermLowpassDyn": {
        "message": "D Term Lowpass Dynamic Filter"
    },
    "pidTuningDTermLowpassDynExpo": {
        "message": "Dynamic Curve Expo"
    },
    "pidTuningDTermLowpassDynType": {
        "message": "Dynamic Filter Type"
    },
    "pidTuningDTermNotchFiltersGroup": {
        "message": "D Term Notch Filter"
    },
    "pidTuningDTermNotchFiltersGroupHelp": {
        "message": "Applies a static (constant frequency) notch filter to D-Term data, at the specified Center frequency.<br /><br />Notch width is set by the cutoff frequency.  <br /><br />May be useful for isolated, constant frequency resonances that are amplified by D.<br /><br />Keep the cutoff as close to centre as possible. Avoid setting notch filters below 100hz except on low RPM builds."
    },
    "pidTuningYawLowpassFiltersGroup": {
        "message": "Yaw Lowpass Filter"
    },
    "pidTuningYawLowpassFiltersGroupHelp": {
        "message": "Applies a PT1 filter at the specified cutoff frequency to Gyro data on the yaw axis."
    },
    "pidTuningVbatPidCompensation": {
        "message": "Vbat PID Compensation"
    },
    "pidTuningVbatPidCompensationHelp": {
        "message": "Increases the PID values to compensate when Vbat gets lower. This will give more constant flight characteristics throughout the flight. The amount of compensation that is applied is calculated from the $t(powerBatteryMaximum.message) set in the $t(tabPower.message) page, so make sure that is set to something appropriate."
    },
    "pidTuningVbatSagCompensation": {
        "message": "Vbat Sag Compensation"
    },
    "pidTuningVbatSagCompensationHelp": {
        "message": "Gives consistent throttle and PID performance over the usable battery voltage range by increasing motor output as battery voltage falls.<br /><br />The amount of compensation can be varied between 0 and 100%. Full compensation (100%) is recommended.<br /><br />Visit <a href=\"https://github.com/betaflight/betaflight/wiki/4.2-Tuning-Notes#dynamic-battery-sag-compensation\"target=\"_blank\" rel=\"noopener noreferrer\">this wiki entry</a> for more info."
    },
    "pidTuningVbatSagValue": {
        "message": "%"
    },
    "pidTuningThrustLinearization": {
        "message": "Thrust Linearization"
    },
    "pidTuningThrustLinearizationHelp": {
        "message": "Improves low throttle authority and responsiveness. <br><br> Especially useful for whoops and 48k ESCs.  Has no effect at higher throttle.<br><br>The amount of compensation can be varied between 0 and 150%. Usually 30-40% is enough."
    },
    "pidTuningThrustLinearValue": {
        "message": "%"
    },
    "pidTuningItermRotation": {
        "message": "I Term Rotation"
    },
    "pidTuningItermRotationHelp": {
        "message": "Rotates the current I Term vector properly to other axes as the quad rotates when yawing continuously during rolls and when performing funnels and other tricks. Very appreciated by LOS acro pilots."
    },
    "pidTuningSmartFeedforward": {
        "message": "Smart Feedforward"
    },
    "pidTuningSmartFeedforwardHelp": {
        "message": "Reduces the effect of the F Term in the PID. When both the P Term and the F Term are active at the same moment, it only uses the larger of the two, avoiding overshoots without the needing to raise D, but also reduces the responsiveness effect produced by the F term when added to P."
    },
    "pidTuningItermRelax": {
        "message": "I Term Relax"
    },
    "pidTuningItermRelaxHelp": {
        "message": "Suppresses I Term accumulation when fast movements occur, reducing bounce-back at the end of rolls, flips and other quick inputs.<br><br> Setpoint mode responds to smoothed stick inputs and works best for responsive quads.<br><br>Gyro mode can be useful for extremely laggy quads.<br><br>Usually iTerm Relax should not be applied to yaw."
    },
    "pidTuningItermRelaxAxes": {
        "message": "Axes",
        "description": "Iterm Relax Axes selection"
    },
    "pidTuningOptionRP": {
        "message": "RP"
    },
    "pidTuningOptionRPY": {
        "message": "RPY"
    },
    "pidTuningItermRelaxAxesOptionRPInc": {
        "message": "RP (increment only)"
    },
    "pidTuningItermRelaxAxesOptionRPYInc": {
        "message": "RPY (increment only)"
    },
    "pidTuningItermRelaxType": {
        "message": "Type",
        "description": "Iterm Relax Type selection"
    },
    "pidTuningItermRelaxTypeOptionGyro": {
        "message": "Gyro"
    },
    "pidTuningItermRelaxTypeOptionSetpoint": {
        "message": "Setpoint"
    },
    "pidTuningItermRelaxCutoff": {
        "message": "Cutoff",
        "description": "Cutoff value of the I Term Relax"
    },
    "pidTuningItermRelaxCutoffHelp": {
        "message": "Lower values mean stronger suppression of bounce-back after flips in low authority quads.  Higher values increase high-rate turn precision for racing.<br><br>Set to 30-40 for racing, 15 for responsive freestyle builds, 10 for heavier freestyle quads, 3-5 for X-class."
    },
    "pidTuningAbsoluteControlGain": {
        "message": "Absolute Control"
    },
    "pidTuningAbsoluteControlGainHelp": {
        "message": "This feature solves some underlying problems of $t(pidTuningItermRotation.message) and may replace it at some point. It accumulates the absolute gyro error in quad coordinates and mixes a proportional correction into setpoint.<br><br>AirMode must be enabled and $t(pidTuningItermRelax.message) (for $t(pidTuningOptionRP.message)). When combined with $t(pidTuningIntegratedYaw.message), you can set $t(pidTuningItermRelax.message) enabled for $t(pidTuningOptionRPY.message)."
    },
    "pidTuningThrottleBoost": {
        "message": "Throttle Boost"
    },
    "pidTuningThrottleBoostHelp": {
        "message": "Transiently boosts throttle with faster throttle inputs, providing a more immediate throttle response."
    },
    "pidTuningIdleMinRpm": {
        "message": "Dynamic Idle Value [* 100 RPM]"
    },
    "pidTuningIdleMinRpmHelp": {
        "message": "Dynamic Idle improves control at low rpm and reduces risk of motor desyncs. <br /><br /> It improves PID authority, zero throttle stability, inverted hang time, and motor braking.<br /><br />The Dynamic Idle min rpm should be set to around 3000 - 3500 rpm. For 4.2, set the DShot idle value low, eg 1%.  There is no need to adjust the DShot Idle value in 4.3. <br /><br />Visit <a href=\"https://github.com/betaflight/betaflight/wiki/Tuning-Dynamic-Idle\"target=\"_blank\" rel=\"noopener noreferrer\">this wiki entry</a> for more info."
    },
    "pidTuningIdleMinRpmDisabled": {
        "message": "Dynamic Idle is OFF because Dshot Telemetry is OFF"
    },
    "pidTuningAcroTrainerAngleLimit": {
        "message": "Acro Trainer Angle Limit"
    },
    "pidTuningAcroTrainerAngleLimitHelp": {
        "message": "Helps pilots learn to fly in acro mode by limiting the angle that the quad can attaion. Valid limits are 10-80 degrees.  The mode must be activated with a switch in the $t(tabAuxiliary.message) tab."
    },
    "pidTuningIntegratedYaw": {
        "message": "Integrated Yaw"
    },
    "pidTuningIntegratedYawCaution": {
        "message": "<span class=\"message-negative\">CAUTION</span>: if you enable this feature, you must adjust the YAW PID accordingly. More info <a href=\"https://github.com/betaflight/betaflight/wiki/Integrated-Yaw\" target=\"_blank\" rel=\"noopener noreferrer\">here</a>"
    },
    "pidTuningIntegratedYawHelp": {
        "message": "Integrated Yaw integrates yaw P, I and D values, allowing yaw P, I and D to be tuned a bit like you'd tune pitch and roll.<br><br>Very little I is required, because the integrated P acts like I, and integrated D acts like P.<br><br>NOTE: Integrated Yaw requires use of Absolute Control, since no I is needed with Integrated Yaw."
    },
    "configHelp2": {
        "message": "Arbitrary board rotation in degrees, to allow mounting it sideways / upside down / rotated etc. When running external sensors, use the sensor alignments (Gyro, Acc, Mag) to define sensor position independent from board orientation. "
    },
    "failsafeFeaturesHelpOld": {
        "message": "Failsafe configuration has changed considerably. Use Betaflight <strong>v1.12.0+</strong> to enable the improved configuration panel."
    },
    "failsafePaneTitleOld": {
        "message": "Receiver failsafe"
    },
    "failsafeFeaturesHelpNew": {
        "message": "Failsafe has two stages. <strong>Stage 1</strong> is entered when a flightchannel has an invalid pulse length, the receiver reports failsafe mode or there is no signal from the receiver at all, the channel fallback settings are applied to <span class=\"message-negative\">all channels</span> and a short amount of time is provided to allow for recovery. <strong>Stage 2</strong> is entered when the error condition takes longer than the configured guard time while the craft is <span class=\"message-negative\">armed</span>, all channels will remain at the applied channel fallback setting unless overruled by the chosen procedure. <br /><strong>Note:</strong> Prior to entering stage 1, channel fallback settings are also applied to individual AUX channels that have invalid pulses."
    },
    "failsafePulsrangeTitle": {
        "message": "Valid Pulse Range Settings"
    },
    "failsafePulsrangeHelp": {
        "message": "Pulses shorter than minimum or longer than maximum are invalid and will trigger application of individual channel fallback settings for AUX channels or entering stage 1 for flightchannels"
    },
    "failsafeRxMinUsecItem": {
        "message": "Minimum length"
    },
    "failsafeRxMaxUsecItem": {
        "message": "Maximum length"
    },
    "failsafeChannelFallbackSettingsTitle": {
        "message": "Channel Fallback Settings"
    },
    "failsafeChannelFallbackSettingsHelp": {
        "message": "These settings are applied to invalid individual AUX channels or to all channels when entering stage 1. <strong>Note:</strong> values are saved in steps of 25usec, so small changes disappear"
    },
    "failsafeChannelFallbackSettingsAuto": {
        "message": "<strong>Auto</strong> means Roll, Pitch and Yaw to center and Throttle low. <strong>Hold</strong> means maintain the last good value received"
    },
    "failsafeChannelFallbackSettingsHold": {
        "message": "<strong>Hold</strong> means maintain the last good value received. <strong>Set</strong> means the value given here will be used"
    },
    "failsafeStageTwoSettingsTitle": {
        "message": "Stage 2 - Settings"
    },
    "failsafeDelayItem": {
        "message": "Guard time for stage 2 activation after signal lost [1 = 0.1 sec.]"
    },
    "failsafeDelayHelp": {
        "message": "Time for stage 1 to wait for recovery"
    },
    "failsafeThrottleLowItem": {
        "message": "Failsafe Throttle Low Delay [1 = 0.1 sec.]"
    },
    "failsafeThrottleLowHelp": {
        "message": "Just disarm the craft instead of executing the selected failsafe procedure when the throttle was low for this amount of time"
    },
    "failsafeThrottleItem": {
        "message": "Throttle value used while landing"
    },
    "failsafeOffDelayItem": {
        "message": "Delay for turning off the Motors during Failsafe [1 = 0.1 sec.]"
    },
    "failsafeOffDelayHelp": {
        "message": "Time to stay in landing mode until the motors are turned off and the craft is disarmed"
    },
    "failsafeSubTitle1": {
        "message": "Stage 2 - Failsafe Procedure"
    },
    "failsafeProcedureItemSelect1": {
        "message": "Land"
    },
    "failsafeProcedureItemSelect2": {
        "message": "Drop"
    },
    "failsafeProcedureItemSelect4": {
        "message": "GPS Rescue"
    },

    "failsafeGpsRescueItemAngle": {
        "message": "Angle"
    },
    "failsafeGpsRescueItemInitialAltitude": {
        "message": "Initial altitude (meters)"
    },
    "failsafeGpsRescueItemDescentDistance": {
        "message": "Descent distance (meters)"
    },
    "failsafeGpsRescueItemMinDth": {
        "message": "Minimum distance to home (meters)"
    },
    "failsafeGpsRescueItemMinDthHelp": {
        "message": "The minimum distance to home needed for GPS rescue to activate"
    },
    "failsafeGpsRescueItemGroundSpeed": {
        "message": "Ground speed (meters/second)"
    },
    "failsafeGpsRescueItemThrottleMin": {
        "message": "Throttle minimum"
    },
    "failsafeGpsRescueItemThrottleMax": {
        "message": "Throttle maximum"
    },
    "failsafeGpsRescueItemThrottleHover": {
        "message": "Throttle hover"
    },
    "failsafeGpsRescueItemAscendRate": {
        "message": "Ascend rate (meters/second)"
    },
    "failsafeGpsRescueItemDescendRate": {
        "message": "Descend rate (meters/second)"
    },    
    "failsafeGpsRescueItemMinSats": {
        "message": "Minimum satellites"
    },
    "failsafeGpsRescueItemAllowArmingWithoutFix": {
        "message": "Allow arming without fix - <span class=\"message-negative\">WARNING: the GPS Rescue will not be available</span>"
    },
    "failsafeGpsRescueItemAltitudeMode": { 
        "message": "Altitude mode"
    },
    "failsafeGpsRescueItemAltitudeModeMaxAlt": { 
        "message": "Maximum altitude"
    },
    "failsafeGpsRescueItemAltitudeModeFixedAlt": { 
        "message": "Fixed altitude"
    },
    "failsafeGpsRescueItemAltitudeModeCurrentAlt": { 
        "message": "Current altitude"
    },
    "failsafeGpsRescueItemSanityChecks": { 
        "message": "Sanity checks"
    },
    "failsafeGpsRescueItemSanityChecksOff": {
        "message": "Off"
    },
    "failsafeGpsRescueItemSanityChecksOn": {
        "message": "On"
    },
    "failsafeGpsRescueItemSanityChecksFSOnly": {
        "message": "Failsafe only"
    },

    "failsafeKillSwitchItem": {
        "message": "Failsafe Kill Switch (setup Failsafe in Modes Tab)"
    },
    "failsafeKillSwitchHelp": {
        "message": "Set this option to make the failsafe switch (Modes Tab) act as a direct kill switch, bypassing the selected failsafe procedure. <strong>Note:</strong> Arming is blocked with the failsafe kill switch in the ON position"
    },
    "failsafeSwitchTitle": {
        "message": "Failsafe Switch"
    },
    "failsafeSwitchModeItem": {
        "message": "Failsafe Switch Action"
    },
    "failsafeSwitchModeHelp": {
        "message": "This option determines what happens when Failsafe is activated through AUX switch:<br/><strong>Stage 1</strong> activates Stage 1 failsafe. This is useful if you want to simulate the exact signal loss failsafe behavior.<br/><strong>Stage 2</strong> skips Stage 1 and activates the Stage 2 procedure immediately<br/><strong>Kill</strong> disarms instantly (your craft will crash)"
    },
    "failsafeSwitchOptionStage1": {
        "message": "Stage 1"
    },
    "failsafeSwitchOptionStage2": {
        "message": "Stage 2"
    },
    "failsafeSwitchOptionKill": {
        "message": "Kill"
    },

    "powerButtonSave": {
        "message": "Save"
    },
    "powerFirmwareUpgradeRequired": {
        "message": "Firmware upgrade <span class=\"message-negative\">required</span>. Battery/Amperage/Voltage configurations using API &lt; 1.33.0 (Betaflight release &lt;= 3.17) is not supported."
    },
    "powerBatteryVoltageMeterSource": {
        "message": "Voltage Meter Source"
    },
    "powerBatteryVoltageMeterTypeNone": {
        "message": "None"
    },
    "powerBatteryVoltageMeterTypeAdc": {
        "message": "Onboard ADC"
    },
    "powerBatteryVoltageMeterTypeEsc": {
        "message": "ESC Sensor"
    },
    "powerBatteryCurrentMeterSource": {
        "message": "Current Meter Source"
    },
    "powerBatteryCurrentMeterTypeNone": {
        "message": "None"
    },
    "powerBatteryCurrentMeterTypeAdc": {
        "message": "Onboard ADC"
    },
    "powerBatteryCurrentMeterTypeVirtual": {
        "message": "Virtual"
    },
    "powerBatteryCurrentMeterTypeEsc": {
        "message": "ESC Sensor"
    },
    "powerBatteryCurrentMeterTypeMsp": {
        "message": "MSP Sensor/OSD Slave"
    },
    "powerBatteryMinimum": {
        "message": "Minimum Cell Voltage"
    },
    "powerBatteryMaximum": {
        "message": "Maximum Cell Voltage"
    },
    "powerBatteryWarning": {
        "message": "Warning Cell Voltage"
    },
    "powerCalibrationManagerButton": {
        "message": "Calibration"
    },
    "powerCalibrationManagerTitle": {
        "message": "Calibration Manager"
    },
    "powerCalibrationManagerHelp": {
        "message": "To calibrate, use a multimeter to measure the actual voltage / current draw on your craft (with a battery plugged in), and enter the values below. Then, with the same battery still plugged in, click [Calibrate]."
    },
    "powerCalibrationManagerNote": {
        "message": "<strong>Note:</strong> Before calibrating the scale make sure that divider and multiplier for voltage and offset for amperage is set properly.<br>Leaving the values at 0 will not apply calibration.</br><strong>Remember to remove propellers before plugging in a battery!</strong>"
    },
    "powerCalibrationManagerWarning": {
        "message": "<span class=\"message-negative\">Warning:</span> The battery <span class=\"message-negative\">is not plugged in</span> or voltage and amperage meter sources are <span class=\"message-negative\">not set properly.</span> Make sure that the voltage and/or amperage are reading a value above 0. Otherwise you will not be able to calibrate using this tool."
    },
    "powerCalibrationManagerSourceNote": {
        "message": "<span class=\"message-negative\">Warning:</span> Voltage and/or amperage meter sources <strong>have been changed but not saved.</strong> Please set the correct meter sources and save them before trying to calibrate."
    },
    "powerCalibrationManagerConfirmationTitle": {
        "message": "Calibration Manager Confirmation"
    },
    "powerCalibrationSave": {
        "message": "Calibrate"
    },
    "powerCalibrationApply": {
        "message": "Apply Calibration"
    },
    "powerCalibrationDiscard": {
        "message": "Discard Calibration"
    },
    "powerCalibrationConfirmHelp": {
        "message": "New calibrated scales are shown here. <br>Applying them will set the scales but <strong>will not save them.</strong></br> <br>After saving make sure that the new voltage and current are correct.</br>"
    },
    "powerVoltageHead": {
        "message": "Voltage Meter"
    },
    "powerVoltageWarning": {
        "message": "<span class=\"message-negative\">Warning:</span> Values limited to 25.5V."
    },
    "powerVoltageValue": {
        "message": "$1 V"
    },
    "powerVoltageCalibration": {
        "message": "Measured Voltage"
    },
    "powerVoltageCalibratedScale": {
        "message": "Calibrated Voltage Scale:"
    },
    "powerVoltageId10": {
        "message": "Battery"
    },
    "powerVoltageId20": {
        "message": "5V"
    },
    "powerVoltageId30": {
        "message": "9V"
    },
    "powerVoltageId40": {
        "message": "12V"
    },
    "powerVoltageId50": {
        "message": "ESC Combined"
    },
    "powerVoltageId60": {
        "message": "ESC Motor 1"
    },
    "powerVoltageId61": {
        "message": "ESC Motor 2"
    },
    "powerVoltageId62": {
        "message": "ESC Motor 3"
    },
    "powerVoltageId63": {
        "message": "ESC Motor 4"
    },
    "powerVoltageId64": {
        "message": "ESC Motor 5"
    },
    "powerVoltageId65": {
        "message": "ESC Motor 6"
    },
    "powerVoltageId66": {
        "message": "ESC Motor 7"
    },
    "powerVoltageId67": {
        "message": "ESC Motor 8"
    },
    "powerVoltageId68": {
        "message": "ESC Motor 9"
    },
    "powerVoltageId69": {
        "message": "ESC Motor 10"
    },
    "powerVoltageId70": {
        "message": "ESC Motor 11"
    },
    "powerVoltageId71": {
        "message": "ESC Motor 12"
    },
    "powerVoltageId80": {
        "message": "Cell 1"
    },
    "powerVoltageId81": {
        "message": "Cell 2"
    },
    "powerVoltageId82": {
        "message": "Cell 3"
    },
    "powerVoltageId83": {
        "message": "Cell 4"
    },
    "powerVoltageId84": {
        "message": "Cell 5"
    },
    "powerVoltageId85": {
        "message": "Cell 6"
    },


    "powerVoltageScale": {
        "message": "Scale"
    },
    "powerVoltageDivider": {
        "message": "Divider Value"
    },
    "powerVoltageMultiplier": {
        "message": "Multiplier Value"
    },

    "powerAmperageHead": {
        "message": "Amperage Meter"
    },
    "powerAmperageWarning": {
        "message": "<span class=\"message-negative\">Warning:</span> Values limited to 63.5A."
    },
    "powerAmperageValue": {
        "message": "$1 A"
    },
    "powerAmperageId10": {
        "message": "Battery"
    },
    "powerAmperageId50": {
        "message": "ESC Combined"
    },
    "powerAmperageId60": {
        "message": "ESC Motor 1"
    },
    "powerAmperageId61": {
        "message": "ESC Motor 2"
    },
    "powerAmperageId62": {
        "message": "ESC Motor 3"
    },
    "powerAmperageId63": {
        "message": "ESC Motor 4"
    },
    "powerAmperageId64": {
        "message": "ESC Motor 5"
    },
    "powerAmperageId65": {
        "message": "ESC Motor 6"
    },
    "powerAmperageId66": {
        "message": "ESC Motor 7"
    },
    "powerAmperageId67": {
        "message": "ESC Motor 8"
    },
    "powerAmperageId68": {
        "message": "ESC Motor 9"
    },
    "powerAmperageId69": {
        "message": "ESC Motor 10"
    },
    "powerAmperageId70": {
        "message": "ESC Motor 11"
    },
    "powerAmperageId71": {
        "message": "ESC Motor 12"
    },
    "powerAmperageId80": {
        "message": "Virtual"
    },
    "powerAmperageId90": {
        "message": "MSP"
    },
    "powerMahValue": {
        "message": "$1 mAh"
    },

    "powerAmperageScale": {
        "message": "Scale [1/10th mV/A]"
    },
    "powerAmperageOffset": {
        "message": "Offset [mA]"
    },
    "powerAmperageCalibration": {
        "message": "Measured Amperage"
    },
    "powerAmperageCalibratedScale": {
        "message": "Calibrated Amperage Scale:"
    },

    "powerBatteryHead": {
        "message": "Battery"
    },
    "powerStateHead": {
        "message": "Power State"
    },
    "powerBatteryConnected": {
        "message": "Connected"
    },
    "powerBatteryConnectedValueYes": {
        "message": "Yes (Cells: $1)"
    },
    "powerBatteryConnectedValueNo": {
        "message": "No"
    },
    "powerBatteryVoltage": {
        "message": "Voltage"
    },
    "powerBatteryCurrentDrawn": {
        "message": "mAh used"
    },
    "powerBatteryAmperage": {
        "message": "Amperage"
    },
    "powerBatteryCapacity": {
        "message": "Capacity (mAh)"
    },
    "osdSetupTitle": {
        "message": "OSD"
    },
    "osdSetupNoOsdChipDetectWarning": {
        "message": "<span class=\"message-negative\"><b>WARNING:</b></span> No OSD chip was detected. Some flight controllers will not properly power the OSD chip unless connected to battery power. Please connect the battery before connecting the USB (PROPS REMOVED!)."
    },
    "osdSetupPreviewHelp": {
        "message": "<strong>Note:</strong> OSD preview may not show the actual font that is installed on the flight controller. The layout of individual elements may look different when older versions of the firmware are used - please check the look through your goggles before flying."
    },
    "osdSetupUnsupportedNote1": {
        "message": "Your flight controller isn't responding to OSD commands. This probably means that it does not have an integrated BetaFlight OSD."
    },
    "osdSetupUnsupportedNote2": {
        "message": "Note that some flight controllers have an onboard <a href=\"https://www.youtube.com/watch?v=ikKH_6SQ-Tk\" target=\"_blank\" rel=\"noopener noreferrer\">MinimOSD</a> that can be flashed and configured with <a href=\"https://github.com/ShikOfTheRa/scarab-osd/releases/latest\" target='_blank'>scarab-osd</a>, however the MinimOSD cannot be configured through this interface."
    },
    "osdSetupProfilesTitle": {
        "message": "OSD Profile number",
        "description": "Description of the header of the OSD elements column associated to each profile"
    },
    "osdSetupElementsTitle": {
        "message": "Elements"
    },
    "osdSetupPreviewTitle": {
        "message": "Drag elements to change position",
        "description": "Indicates in the preview window of the OSD that the user can drag the elements to reorder them"
    },
    "osdSetupPreviewSelectProfileTitle": {
        "message": "Preview for",
        "description": "Label of the selector for the OSD Profile in the preview. KEEP IT SHORT!!!"
    },
    "osdSetupPreviewForTitle": {
        "message": "Changing here the profile or the font will NOT change the profile or the font in the flight controller, only affects the preview window. If you want to change it, you must use the '$t(osdSetupSelectedProfileTitle.message)' option or the '$t(osdSetupFontManager.message)' button respectively.",
        "description": "Help content for the OSD profile and font PREVIEW"
    },
    "osdSetupSelectedProfileTitle": {
        "message": "Active OSD Profile",
        "description": "Title of the box to select the current active OSD profile"
    },
    "osdSetupSelectedProfileLabel": {
        "message": "Current:",
        "description": "Label for the selection of the curren active OSD profile"
    },
    "osdSetupPreviewSelectProfileElement": {
        "message": "OSD Profile {{profileNumber}}",
        "description": "Content of the selector for the OSD Profile in the preview"
    },
    "osdSetupPreviewSelectFontElement": {
        "message": "Font {{fontName}}",
        "description": "Content of the selector for the OSD Font in the preview"
    },
    "osdSetupVideoFormatTitle": {
        "message": "Video Format"
    },
    "osdSetupVideoFormatOptionAuto": {
        "message": "Auto",
        "description": "Option for the video format in the OSD"
    },
    "osdSetupVideoFormatOptionPal": {
        "message": "PAL",
        "description": "Option for the video format in the OSD"
    },
    "osdSetupVideoFormatOptionNtsc": {
        "message": "NTSC",
        "description": "Option for the video format in the OSD"
    },
    "osdSetupUnitsTitle": {
        "message": "Units"
    },
    "osdSetupUnitsOptionImperial": {
        "message": "Imperial",
        "description": "Option for the units system used in the OSD"
    },
    "osdSetupUnitsOptionMetric": {
        "message": "Metric",
        "description": "Option for the units system used in the OSD"
    },
    "osdSetupUnitsOptionBritish": {
        "message": "British",
        "description": "Option for the units system used in the OSD"
    },
    "osdSetupTimersTitle": {
        "message": "Timers"
    },
    "osdSetupAlarmsTitle": {
        "message": "Alarms"
    },
    "osdSetupStatsTitle": {
        "message": "Post Flight Statistics"
    },
    "osdSetupVtxTitle": {
        "message": "VTX Settings"
    },
    "osdSetupCraftNameTitle": {
        "message": "Craft Name"
    },
    "osdSetupWarningsTitle": {
        "message": "Warnings"
    },
    "osdSetupFontPresets": {
        "message": "Font presets:"
    },
    "osdSetupFontPresetsSelector": {
        "message": "Select Font Presets:"
    },
    "osdSetupFontPresetsSelectorCustomOption": {
        "message": "User supplied font",
        "description": "Option to show as selected when the user selects a custom local font"
    },
    "osdSetupFontPresetsSelectorOr": {
        "message": "or"
    },
    "osdSetupOpenFont": {
        "message": "Open Font File"
    },
    "osdSetupCustomLogoTitle": {
        "message": "Boot logo:"
    },
    "osdSetupCustomLogoOpenImageButton": {
        "message": "Select custom image&hellip;"
    },
    "osdSetupCustomLogoInfoTitle": {
        "message": "Custom image:"
    },
    "osdSetupCustomLogoInfoImageSize": {
        "message": "Size must be $t(logoWidthPx)×$t(logoHeightPx) pixels"
    },
    "osdSetupCustomLogoInfoColorMap": {
        "message": "Must contain green, black and white pixels"
    },
    "osdSetupCustomLogoInfoUploadHint": {
        "message": "Click <b>$t(osdSetupUploadFont.message)</b> to persist custom logo"
    },
    "osdSetupCustomLogoImageSizeError": {
        "message": "Invalid image size: {{width}}×{{height}} (expected $t(logoWidthPx)×$t(logoHeightPx))"
    },
    "osdSetupCustomLogoColorMapError": {
        "message": "The image contains an invalid pixel: rgb({{valueR}}, {{valueG}}, {{valueB}}) at coordinates {{posX}}×{{posY}}"
    },
    "osdSetupUploadFont": {
        "message": "Upload Font"
    },
    "osdSetupUploadingFont": {
        "message": "Uploading..."
    },
    "osdSetupUploadingFontEnd": {
        "message": "Uploaded all {{length}} characters to the OSD"
    },

    "osdSetupSave": {
        "message": "Save"
    },
    "osdSetupFontManager": {
        "message": "Font Manager"
    },
    "osdSetupUncheckAll": {
        "message": "Uncheck all"
    },
    "osdSetupHead": {
        "message": "Info"
    },
    "osdSetupVideoMode": {
        "message": "Video Mode"
    },
    "osdSetupCameraConnected": {
        "message": "Camera Connected"
    },

    "osdSetupResetText": {
        "message": "Reset OSD to default"
    },
    "osdSetupButtonReset": {
        "message": "Reset Settings"
    },

    "osdTextElementMainBattVoltage": {
        "message": "Battery voltage",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementMainBattVoltage": {
        "message": "Instantaneous main battery voltage (flashes when below alarm threshold)"
    },
    "osdTextElementRssiValue": {
        "message": "RSSI value",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementRssiValue": {
        "message": "Instantaneous RSSI value (flashes when below alarm threshold)"
    },
    "osdTextElementTimer": {
        "message": "Timer",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementTimer": {
        "message": "A flight timer"
    },
    "osdTextElementThrottlePosition": {
        "message": "Throttle position",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementThrottlePosition": {
        "message": "Current throttle channel value"
    },
    "osdTextElementCpuLoad": {
        "message": "CPU load",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementCpuLoad": {
        "message": "Current CPU load"
    },
    "osdTextElementVtxChannel": {
        "message": "VTX channel",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementVtxChannel": {
        "message": "Current VTX channel and power"
    },
    "osdTextElementVoltageWarning": {
        "message": "Battery voltage warning",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementVoltageWarning": {
        "message": "Shows a warning when the voltage is under the alarm value"
    },
    "osdTextElementArmed": {
        "message": "Armed",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementArmed": {
        "message": "Textual armed message"
    },
    "osdTextElementDisarmed": {
        "message": "Disarmed",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementDisarmed": {
        "message": "Textual disarmed message"
    },
    "osdTextElementCrosshairs": {
        "message": "Crosshairs",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementCrosshairs": {
        "message": "Center of screen crosshair"
    },
    "osdTextElementArtificialHorizon": {
        "message": "Artificial horizon",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementArtificialHorizon": {
        "message": "Graphical artificial horizon indicator"
    },
    "osdTextElementHorizonSidebars": {
        "message": "Artificial horizon sidebars",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementHorizonSidebars": {
        "message": "Sidebars around artificial horizon indicator"
    },
    "osdTextElementCurrentDraw": {
        "message": "Battery current draw",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementCurrentDraw": {
        "message": "Instantaneous battery current draw"
    },
    "osdTextElementMahDrawn": {
        "message": "Battery current mAh drawn",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementMahDrawn": {
        "message": "Total battery capacity used"
    },
    "osdTextElementCraftName": {
        "message": "Craft name",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementCraftName": {
        "message": "Craft name as set in Configuration tab"
    },
    "osdTextElementAltitude": {
        "message": "Altitude",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementAltitude": {
        "message": "Current altitude (flashes when above alarm threshold)"
    },
    "osdTextElementAltitudeVariant1Decimal": {
        "message": "With 1 decimal",
        "description": "One of the variants of the altitude element of the OSD"
    },
    "osdTextElementAltitudeVariantNoDecimal": {
        "message": "Without decimals",
        "description": "One of the variants of the altitude element of the OSD"
    },
    "osdTextElementOnTime": {
        "message": "On time",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementOnTime": {
        "message": "Total time the craft has been powered on"
    },
    "osdTextElementFlyTime": {
        "message": "Fly time",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementFlyTime": {
        "message": "Total time the craft has been armed in the current power cycle (flashes when above alarm threshold)"
    },
    "osdTextElementFlyMode": {
        "message": "Fly mode",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementFlyMode": {
        "message": "Current flight mode"
    },
    "osdTextElementGPSSpeed": {
        "message": "GPS speed",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementGPSSpeed": {
        "message": "GPS provided speed"
    },
    "osdTextElementGPSSats": {
        "message": "GPS sats",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementGPSSats": {
        "message": "Number of satellites providing GPS fix"
    },
    "osdTextElementGPSLon": {
        "message": "GPS longitude",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementGPSLon": {
        "message": "GPS longitude coordinate"
    },
    "osdTextElementGPSLat": {
        "message": "GPS latitude",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementGPSLat": {
        "message": "GPS latitude coordinate"
    },
    "osdTextElementGPSVariant7Decimals": {
        "message": "With 7 decimals",
        "description": "One of the variants for the GPS element of the OSD"
    },
    "osdTextElementGPSVariant4Decimals": {
        "message": "With 4 decimals",
        "description": "One of the variants for the GPS element of the OSD"        
    },
    "osdTextElementGPSVariantDegMinSec": {
        "message": "Using degrees, minutes and seconds",
        "description": "One of the variants for the GPS element of the OSD"
    },
    "osdTextElementGPSVariantOpenLocation": {
        "message": "Using Open Location Code",
        "description": "One of the variants for the GPS element of the OSD"
    },
    "osdTextElementDebug": {
        "message": "Debug",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementDebug": {
        "message": "Debug variables"
    },
    "osdTextElementPIDRoll": {
        "message": "PID roll",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementPIDRoll": {
        "message": "Roll axis PID gains"
    },
    "osdTextElementPIDPitch": {
        "message": "PID pitch",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementPIDPitch": {
        "message": "Pitch axis PID gains"
    },
    "osdTextElementPIDYaw": {
        "message": "PID yaw",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementPIDYaw": {
        "message": "Yaw axis PID gains"
    },
    "osdTextElementPower": {
        "message": "Power",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementPower": {
        "message": "Instantaneous electrical power consumption"
    },
    "osdTextElementPIDRateProfile": {
        "message": "Profile: PID and rate",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementPIDRateProfile": {
        "message": "Numerical display of the active PID and rate profiles"
    },
    "osdTextElementBatteryWarning": {
        "message": "Battery warning",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementBatteryWarning": {
        "message": "Warning text that appears when the battery voltage falls below warning threshold"
    },
    "osdTextElementAvgCellVoltage": {
        "message": "Battery average cell voltage",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementAvgCellVoltage": {
        "message": "Average cell voltage (main battery voltage / cell count)"
    },
    "osdTextElementPitchAngle": {
        "message": "Angle: pitch",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementPitchAngle": {
        "message": "Numerical pitch angle in degrees"
    },
    "osdTextElementRollAngle": {
        "message": "Angle: roll",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementRollAngle": {
        "message": "Numerical roll angle in degrees"
    },
    "osdTextElementMainBattUsage": {
        "message": "Battery usage",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementMainBattUsage": {
        "message": "Graphical representation of battery capacity usage"
    },
    "osdTextElementMainBattUsageVariantGraphrRemain": {
        "message": "Graphical remaining",
        "description": "One of the variants for the Main Battery Usage element of the OSD"
    },
    "osdTextElementMainBattUsageVariantGraphUsage": {
        "message": "Graphical used",
        "description": "One of the variants for the Main Battery Usage element of the OSD"
    },
    "osdTextElementMainBattUsageVariantValueRemain": {
        "message": "Percentage remaining",
        "description": "One of the variants for the Main Battery Usage element of the OSD"
    },
    "osdTextElementMainBattUsageVariantValueUsage": {
        "message": "Percentage used",
        "description": "One of the variants for the Main Battery Usage element of the OSD"
    },
    "osdTextElementArmedTime": {
        "message": "Timer: armed time",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementArmedTime": {
        "message": "Time since the craft was last armed"
    },
    "osdTextElementHomeDirection": {
        "message": "Home direction",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementHomeDirection": {
        "message": "Arrow showing direction to home position"
    },
    "osdTextElementHomeDistance": {
        "message": "Home distance",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementHomeDistance": {
        "message": "Distance to home position (in either feet or metre based on unit system setting)"
    },
    "osdTextElementNumericalHeading": {
        "message": "Numerical heading",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementNumericalHeading": {
        "message": "Numerical readout of current heading in degrees"
    },
    "osdTextElementNumericalVario": {
        "message": "Numerical vario",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementNumericalVario": {
        "message": "Numerical readout of vertical speed (in either feet or metre based on unit system setting)"
    },
    "osdTextElementCompassBar": {
        "message": "Compass bar",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementCompassBar": {
        "message": "Graphical compass bar showing current heading"
    },
    "osdTextElementWarnings": {
        "message": "Warnings",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementWarnings": {
        "message": "Alerts (e.g. low battery), warnings (e.g. reasons for not arming, critically low battery) and visual beeper (4 flashing asterisks)."
    },
    "osdTextElementEscTemperature": {
        "message": "ESC temperature",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementEscTemperature": {
        "message": "Temperature reported by ESC telemetry"
    },
    "osdTextElementEscRpm": {
        "message": "ESC RPM",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementEscRpm": {
        "message": "RPM reported by ESC telemetry"
    },
    "osdTextElementRemaningTimeEstimate": {
        "message": "Timer: remaining time estimate",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementRemaningTimeEstimate" : {
        "message": "Estimate of flight time remaning"
    },
    "osdTextElementRtcDateTime": {
        "message": "RTC date and time",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementRtcDateTime": {
        "message": "Real time clock date / time"
    },
    "osdTextElementAdjustmentRange": {
        "message": "Adjustment range",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementAdjustmentRange": {
        "message": "Currently active adjustment range setting and value"
    },
    "osdTextElementTimer1": {
        "message": "Timer 1",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementTimer1" : {
        "message": "Shows the value of timer 1"
    },
    "osdTextElementTimer2": {
        "message": "Timer 2",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementTimer2" : {
        "message": "Shows the value of timer 2"
    },
    "osdTextElementCoreTemperature": {
        "message": "Core temperature",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementCoreTemperature": {
        "message": "Temperature of the STM32 MCU core"
    },
    "osdTextAntiGravity": {
        "message": "Anti gravity",
        "description": "One of the elements of the OSD"
    },
    "osdDescAntiGravity": {
        "message": "Enables an indicator when the anti gravity is active"
    },
    "osdTextGForce": {
        "message": "G force",
        "description": "One of the elements of the OSD"
    },
    "osdDescGForce": {
        "message": "Shows how much G-Force the craft is experiencing"
    },
    "osdTextElementMotorDiag": {
        "message": "Motor diagnostics",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementMotorDiag": {
        "message": "Shows a graph of the output of each motor"
    },
    "osdTextElementLogStatus": {
        "message": "Blackbox log status",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementLogStatus": {
        "message": "Blackbox number and warnings"
    },
    "osdTextElementFlipArrow": {
        "message": "Flip after crash arrow",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementFlipArrow": {
        "message": "Arrow showing which side motors are up in turtle mode"
    },
    "osdTextElementLinkQuality": {
        "message": "Link quality",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementLinkQuality": {
        "message": "Alternative indicator for 'link quality' based on frame loss - use with caution"
    },
    "osdTextElementFlightDist": {
        "message": "Flight distance",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementFlightDist": {
        "message": "Distance flown during this flight."
    },
    "osdTextElementStickOverlayLeft": {
        "message": "Stick overlay left",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementStickOverlayLeft": {
        "message": "Overlay for the left transmitter stick position."
    },
    "osdTextElementStickOverlayRight": {
        "message": "Stick overlay right",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementStickOverlayRight": {
        "message": "Overlay for the right transmitter stick position."
    },
    "osdTextElementDisplayName": {
        "message": "Display name",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementDisplayName": {
        "message": "Display name as set by the \"display_name\" cli command"
    },
    "osdTextElementEscRpmFreq": {
        "message": "ESC RPM frequency",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementEscRpmFreq": {
        "message": "RPM frequency reported by ESC telemetry"
    },
    "osdTextElementRateProfileName": {
        "message": "Profile: rate profile name",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementRateProfileName": {
        "message": "Shows the current rate profile name"
    },
    "osdTextElementPidProfileName": {
        "message": "Profile: PID profile name",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementPidProfileName": {
        "message": "Shows the current PID profile name"
    },
    "osdTextElementOsdProfileName": {
        "message": "Profile: OSD profile name",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementOsdProfileName": {
        "message": "OSD profile name as set in the \"osd_profile_1_name\", \"osd_profile_2_name\" and \"osd_profile_3_name\" CLI variables"
    },
    "osdTextElementRssiDbmValue": {
        "message": "RSSI dBm value",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementRssiDbmValue": {
        "message": "Value in dBm of the RSSI signal if available"
    },
    "osdTextElementRcChannels": {
        "message": "RC Channels",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementRcChannels": {
        "message": "Display at most 4 channels values. The channels must be specified with the CLI variable 'osd_rcchannels'"
    },    
    "osdTextElementCameraFrame": {
        "message": "Camera frame",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementCameraFrame": {
        "message": "Adds an adjustable outline element designed to represent the field of view of the pilot's HD camera for visual framing.<br /><br />You can adjust the width and height in CLI with 'osd_camera_frame_width' and 'osd_camera_frame_height'"
    },    
    "osdTextElementEfficiency": {
        "message": "Battery efficiency",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementEfficiency": {
        "message": "Instantaneous battery consumption in mAh/distance.  (Requires valid GPS fix)"
    },
    "osdTextTotalFlights": {
        "message": "Total flights",
        "description": "One of the elements of the OSD"
    },
    "osdDescTotalFlights": {
        "message": "Approximate total number of flights"
    },
    "osdTextElementUpDownReference": {
        "message": "Up (Pitch 90 deg)/Down (Pitch -90 deg) Reference",
        "description": "OSD Symbol to show when pitch is approaching vertical (90 deg, U) and D for nose down (-90 deg, D)"
    },
    "osdDescUpDownReference": {
        "message": "OSD Symbol to show when pitch is approaching vertical (90 deg, U) and D for nose down (-90 deg, D)"
    },
    "osdTextElementTxUplinkPower": {
        "message": "Tx uplink power",
        "description": "One of the elements of the OSD"
    },
    "osdDescTxUplinkPower": {
        "message": "Shows a value of the Tx power (mW or W). Useful when <i>Dynamic Power</i> is enabled for supporting radios"
    },
    "osdTextElementUnknown": {
        "message": "Unknown $1",
        "description": "One of the elements of the OSD"
    },
    "osdDescElementUnknown" : {
        "message": "Unknown element (details to be added in a future release)"
    },

    "osdTextStatMaxSpeed": {
        "message": "Speed maximum",
        "description": "One of the statistics that can be shown at the end of the flight in the OSD"
    },
    "osdDescStatMaxSpeed": {
        "message": "Maximum recorded speed"
    },
    "osdTextStatMinBattery": {
        "message": "Battery voltage minimum",
        "description": "One of the statistics that can be shown at the end of the flight in the OSD"
    },
    "osdDescStatMinBattery": {
        "message": "Minimum recorded main battery voltage"
    },
    "osdTextStatMinRssi": {
        "message": "RSSI minimum",
        "description": "One of the statistics that can be shown at the end of the flight in the OSD"
    },
    "osdDescStatMinRssi": {
        "message": "Minimum recorded RSSI"
    },
    "osdTextStatMaxCurrent": {
        "message": "Battery current draw maximum",
        "description": "One of the statistics that can be shown at the end of the flight in the OSD"
    },
    "osdDescStatMaxCurrent": {
        "message": "Maximum recorded current draw"
    },
    "osdTextStatUsedMah": {
        "message": "Battery mAh used",
        "description": "One of the statistics that can be shown at the end of the flight in the OSD"
    },
    "osdDescStatUsedMah": {
        "message": "Battery capacity used"
    },
    "osdTextStatMaxAltitude": {
        "message": "Altitude maximum",
        "description": "One of the statistics that can be shown at the end of the flight in the OSD"
    },
    "osdDescStatMaxAltitude": {
        "message": "Maximum recorded altitude"
    },
    "osdTextStatBlackbox": {
        "message": "Blackbox usage",
        "description": "One of the statistics that can be shown at the end of the flight in the OSD"
    },
    "osdDescStatBlackbox": {
        "message": "Percentage of total blackbox use"
    },
    "osdTextStatEndBattery": {
        "message": "Battery voltage end",
        "description": "One of the statistics that can be shown at the end of the flight in the OSD"
    },
    "osdDescStatEndBattery": {
        "message": "Battery voltage at time of disarm"
    },
    "osdTextStatFlyTime": {
        "message": "Fly time total",
        "description": "One of the statistics that can be shown at the end of the flight in the OSD"
    },
    "osdDescStatFlyTime": {
        "message": "Total time craft has been armed on current power cycle"
    },
    "osdTextStatArmedTime": {
        "message": "Fly time last armed",
        "description": "One of the statistics that can be shown at the end of the flight in the OSD"
    },
    "osdDescStatArmedTime": {
        "message": "Time since craft was last armed"
    },
    "osdTextStatMaxDistance": {
        "message": "Home distance maximum",
        "description": "One of the statistics that can be shown at the end of the flight in the OSD"
    },
    "osdDescStatMaxDistance": {
        "message": "Maximum distance from home location"
    },
    "osdTextStatBlackboxLogNumber": {
        "message": "Blackbox number",
        "description": "One of the statistics that can be shown at the end of the flight in the OSD"
    },
    "osdDescStatBlackboxLogNumber": {
        "message": "Log number for this flights Blackbox log"
    },
    "osdTextStatTimer1": {
        "message": "Timer 1",
        "description": "One of the statistics that can be shown at the end of the flight in the OSD"
    },
    "osdDescStatTimer1": {
        "message": "Value of timer 1 at time of disarming"
    },
    "osdTextStatTimer2": {
        "message": "Timer 2",
        "description": "One of the statistics that can be shown at the end of the flight in the OSD"
    },
    "osdDescStatTimer2": {
        "message": "Value of timer 2 at time of disarming"
    },
    "osdTextStatRtcDateTime": {
        "message": "RTC date and time",
        "description": "One of the statistics that can be shown at the end of the flight in the OSD"
    },
    "osdDescStatRtcDateTime": {
        "message": "Date and time from real time clock"
    },
    "osdTextStatBattery": {
        "message": "Battery voltage",
        "description": "One of the statistics that can be shown at the end of the flight in the OSD"
    },
    "osdDescStatBattery": {
        "message": "Voltage of the battery in real time"
    },
    "osdTextStatGForce": {
        "message": "G force maximum",
        "description": "One of the statistics that can be shown at the end of the flight in the OSD"
    },
    "osdDescStatGForce": {
        "message": "Max G-Force experienced by the craft"
    },
    "osdTextStatEscTemperature": {
        "message": "ESC temperature maximum",
        "description": "One of the statistics that can be shown at the end of the flight in the OSD"
    },
    "osdDescStatEscTemperature": {
        "message": "Max ESC temperature"
    },
    "osdTextStatEscRpm": {
        "message": "ESC RPM maximum",
        "description": "One of the statistics that can be shown at the end of the flight in the OSD"
    },
    "osdDescStatEscRpm": {
        "message": "Max ESC RPM"
    },
    "osdTextStatMinLinkQuality": {
        "message": "Link quality minimum",
        "description": "One of the statistics that can be shown at the end of the flight in the OSD"
    },
    "osdDescStatMinLinkQuality": {
        "message": "Minimum of the alternative indicator for 'link quality' based on frame loss"
    },
    "osdTextStatFlightDistance": {
        "message": "Flight distance",
        "description": "One of the statistics that can be shown at the end of the flight in the OSD"
    },
    "osdDescStatFlightDistance": {
        "message": "Total distance travelled during the flight"
    },
    "osdTextStatMaxFFT": {
        "message": "FFT maximum",
        "description": "One of the statistics that can be shown at the end of the flight in the OSD"
    },
    "osdDescStatMaxFFT": {
        "message": "Peak FFT frequency"
    },
    "osdTextStatTotalFlights": {
        "message": "Flights count total",
        "description": "One of the statistics that can be shown at the end of the flight in the OSD"
    },
    "osdDescStatTotalFlights": {
        "message": "Total number of flights"
    },
    "osdTextStatTotalFlightTime": {
        "message": "Fly time total",
        "description": "One of the statistics that can be shown at the end of the flight in the OSD"
    },
    "osdDescStatTotalFlightTime": {
        "message": "Total time spent flying"
    },
    "osdTextStatTotalFlightDistance": {
        "message": "Flight distance total",
        "description": "One of the statistics that can be shown at the end of the flight in the OSD"
    },
    "osdDescStatTotalFlightDistance": {
        "message": "Total distance traveled"
    },
    "osdTextStatMinRssiDbm": {
        "message": "RSSI dBm minimum",
        "description": "One of the statistics that can be shown at the end of the flight in the OSD"
    },
    "osdDescStatMinRssiDbm": {
        "message": "Minimum RSSI dBm value"
    },
    "osdTextStatUnknown": {
        "message": "Unknown $1",
        "description": "One of the statistics that can be shown at the end of the flight in the OSD"
    },
    "osdDescStatUnknown": {
        "message": "Unknown statistic (details to be added in a future release)"
    },

    "osdDescribeFontVersion1": {
        "message": "Font version: 1 (Betaflight 4.0 or older)"
    },
    "osdDescribeFontVersion2": {
        "message": "Font version: 2 (Betaflight 4.1 or newer)"
    },
    "osdDescribeFontVersionCUSTOM": {
        "message": "Font version: user provided"
    },

    "osdTimerSource": {
      "message": "Source:"
    },
    "osdTimerSourceTooltip": {
        "message": "Select the timer source, this controls the duration/event that the timer measures"
    },
    "osdTimerSourceOptionOnTime": {
      "message": "On time",
      "description": "One of the options for the source timer. This options shows the amount of time has passed since the battery was plugged"
    },
    "osdTimerSourceOptionTotalArmedTime": {
      "message": "Total armed time",
      "description": "One of the options for the source timer. This options shows the amount of time the craft was armed since the battery was plugged"
    },
    "osdTimerSourceOptionLastArmedTime": {
      "message": "Last armed time",
      "description": "One of the options for the source timer. This options shows the amount of time the craft was armed the latest time"
    },
    "osdTimerSourceOptionOnArmTime": {
      "message": "On/Armed time",
      "description": "One of the options for the source timer. This option shows On time when craft is disarmed, and Armed time when armed"
    },
    "osdTimerPrecision": {
      "message": "Precision:"
    },
    "osdTimerPrecisionTooltip": {
        "message": "Select the timer precision, this controls to what precision the time is reported in"
    },
    "osdTimerPrecisionOptionSecond": {
      "message": "Second",
      "description": "Selectable option for the precision of the timer in the OSD"
    },
    "osdTimerPrecisionOptionHundredth": {
      "message": "Hundredth",
      "description": "Selectable option for the precision of the timer in the OSD"
    },
    "osdTimerPrecisionOptionTenth": {
      "message": "Tenth",
      "description": "Selectable option for the precision of the timer in the OSD"
    },
    "osdTimerAlarm": {
      "message": "Alarm:"
    },
    "osdTimerAlarmTooltip": {
        "message": "Select the timer alarm threshold in minutes, when the time exceeds this value the OSD element will blink, setting this to 0 disables the alarm"
    },
    "osdTimerAlarmOptionRssi": {
      "message": "RSSI",
      "description": "Text of the RSSI alarm"
    },
    "osdTimerAlarmOptionCapacity": {
      "message": "Capacity",
      "description": "Text of the capacity alarm"
    },
    "osdTimerAlarmOptionAltitude": {
      "message": "Altitude",
      "description": "Text of the altitude alarm"
    },

    "osdWarningTextArmingDisabled": {
        "message": "Arming disabled",
        "description": "One of the warnings that can be selected to be shown in the OSD"
    },
    "osdWarningArmingDisabled": {
        "message": "Reports the most severe reason for not arming"
    },
    "osdWarningTextBatteryNotFull": {
        "message": "Battery not full",
        "description": "One of the warnings that can be selected to be shown in the OSD"
    },
    "osdWarningBatteryNotFull": {
        "message": "Alerts when a battery is connected that is not fully charged"
    },
    "osdWarningTextBatteryWarning": {
        "message": "Battery warning",
        "description": "One of the warnings that can be selected to be shown in the OSD"
    },
    "osdWarningBatteryWarning": {
        "message": "Alerts when the battery voltage falls below warning threshold"
    },
    "osdWarningTextBatteryCritical": {
        "message": "Battery critical",
        "description": "One of the warnings that can be selected to be shown in the OSD"
    },
    "osdWarningBatteryCritical": {
        "message": "Alerts when the battery voltage falls below the minimum average cell voltage"
    },
    "osdWarningTextVisualBeeper": {
        "message": "Visual beeper",
        "description": "One of the warnings that can be selected to be shown in the OSD"
    },
    "osdWarningVisualBeeper": {
        "message": "Shows a visualisation of the beeper (shows as 4 asterisks)"
    },
    "osdWarningTextCrashFlipMode": {
        "message": "Crash flip mode",
        "description": "One of the warnings that can be selected to be shown in the OSD"
    },
    "osdWarningCrashFlipMode": {
        "message": "Warns when flip over after crash mode is activated"
    },
    "osdWarningTextEscFail": {
        "message": "ESC fail",
        "description": "One of the warnings that can be selected to be shown in the OSD"
    },
    "osdWarningEscFail": {
        "message": "Enumerates a list with the ESCs/motors that are failing (RPM or temperature are out of the configured threshold)"
    },
    "osdWarningTextCoreTemperature": {
        "message": "Core temperature",
        "description": "One of the warnings that can be selected to be shown in the OSD"
    },
    "osdWarningCoreTemperature": {
        "message": "Warns when MCU core temperature exceeds a configured threshold"
    },
    "osdWarningTextRcSmoothingFailure": {
        "message": "RC Smoothing failure",
        "description": "One of the warnings that can be selected to be shown in the OSD"
    },
    "osdWarningRcSmoothingFailure": {
        "message": "Warns when RC Smoothing initialization failed"
    },
    "osdWarningTextFailsafe": {
        "message": "Failsafe",
        "description": "One of the warnings that can be selected to be shown in the OSD"
    },
    "osdWarningFailsafe": {
        "message": "Warns when failsafe occurs"
    },
    "osdWarningTextLaunchControl": {
        "message": "Launch control",
        "description": "One of the warnings that can be selected to be shown in the OSD"
    },
    "osdWarningLaunchControl": {
        "message": "Warns when Launch Control mode is activated"
    },
    "osdWarningTextGpsRescueUnavailable": {
        "message": "GPS Rescue unavailable",
        "description": "One of the warnings that can be selected to be shown in the OSD"
    },
    "osdWarningGpsRescueUnavailable": {
        "message": "Warns when GPS Rescue is not available and cannot be activated"
    },
    "osdWarningTextGpsRescueDisabled": {
        "message": "GPS Rescue disabled",
        "description": "One of the warnings that can be selected to be shown in the OSD"
    },
    "osdWarningGpsRescueDisabled": {
        "message": "Warns when GPS Rescue is disabled"
    },
    "osdWarningTextRSSI": {
        "message": "RSSI",
        "description": "One of the warnings that can be selected to be shown in the OSD"
    },
    "osdWarningRSSI": {
        "message": "Warns when RSSI is below alarm setting"
    },
    "osdWarningTextLinkQuality": {
        "message": "Link quality",
        "description": "One of the warnings that can be selected to be shown in the OSD"
    },
    "osdWarningLinkQuality": {
        "message": "Warns when Link Quality is below alarm setting"
    },
    "osdWarningTextRssiDbm": {
        "message": "RSSI dBm",
        "description": "One of the warnings that can be selected to be shown in the OSD"
    },
    "osdWarningRssiDbm": {
        "message": "Warns when RSSI dBm value is below alarm setting"
    },
    "osdWarningTextOverCap": {
        "message": "Battery over capacity",
        "description": "One of the warnings that can be selected to be shown in the OSD"
    },
    "osdWarningOverCap": {
        "message": "Warns when the consumed mAh exceeds the configured capacity limit"
    },
    "osdWarningTextUnknown": {
        "message": "Unknown $1"
    },
    "osdWarningUnknown": {
        "message": "Unknown warning (details to be added in a future release)"
    },

    "osdSectionHelpElements": {
        "message": "Enable or disable OSD elements."
    },
    "osdSectionHelpVideoMode": {
        "message": "Set the expected video mode of the camera (typically this can be left on AUTO, if you have difficulties then set this to match the camera output)."
    },
    "osdSectionHelpUnits": {
        "message": "Sets the unit system used for numeric readouts."
    },
    "osdSectionHelpTimers": {
        "message": "Configure flight timers."
    },
    "osdSectionHelpAlarms": {
        "message": "Set the thresholds used for OSD elements with alarm states."
    },
    "osdSectionHelpStats": {
        "message": "Set the values dispalyed on the post flight statistics screen."
    },
    "osdSectionHelpWarnings": {
        "message": "Enable or disable warnings that are shown on the WARNINGS element."
    },
    "osdSettingsSaved": {
        "message": "OSD settings saved"
    },
    "osdWritePermissions": {
        "message": "You don't have <span class=\"message-negative\">write permissions</span> for this file"
    },
    "osdButtonSaved": {
        "message": "Saved"
    },

    "vtxHelp": {
        "message": "Here you can configure the values for your Video Transmitter (VTX). You can view and change the transmission values, including the VTX Tables, if the flight controller and the VTX support it.<br>To set up your VTX use the following steps:<br>1. Go to <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/betaflight/betaflight/wiki/VTX-tables\">this</a> page;<br>2. Find the appropriate VTX configuration file for your country and your VTX model and download it;<br>3. Click '$t(vtxButtonLoadFile.message)' below, select the VTX configuration file, load it;<br>4. Verify that the settings are correct;<br>5. Click '$t(vtxButtonSave.message)' to store the VTX settings on the flight controller.<br>6. Optionally click '$t(vtxButtonSaveLua.message)' to save a lua configuration file you can use with the betaflight lua scripts (See more <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/betaflight/betaflight-tx-lua-scripts/\">here</a>.)",
        "description": "Introduction message in the VTX tab"
    },
    "vtxMessageNotSupported": {
        "message": "<span class=\"message-negative\">Attention:</span> Your VTX is not configured or not supported. So you can't modify the VTX values from here. This will only be possible if the flight controller is attached to the VTX using some protocol like Tramp or SmartAudio and is correctly configured in the $t(tabPorts.message) tab if needed.",
        "description": "Message to show when the VTX is not supported in the VTX tab"
    },
    "vtxMessageTableNotConfigured": {
        "message": "<span class=\"message-negative\">Attention:</span> You need to configure and save FIRST the VTX Table at the bottom before you can make use of the $t(vtxSelectedMode.message) fields.",
        "description": "Message to show when the VTX is not supported in the VTX tab"
    },
    "vtxMessageFactoryBandsNotSupported": {
        "message": "<span class=\"message-negative\">Attention:</span> The selected VTX type does not support the 'factory' setting for bands, but some of your bands have this setting. Click '$t(vtxButtonSave.message)' to fix this.",
        "description": "Message to show when the configured VTX type does not support factory bands, but one or more of the configured bands are of this type"
    },
    "vtxMessageVerifyTable": {
        "message": "<span class=\"message-negative\">Attention:</span> The values of the VTX Table have been loaded, but not yet stored on the flight controller. You must verify and modify the values to be sure that they are valid and legal in your country and then press the $t(vtxButtonSave.message) button to store them on the flight controller.",
        "description": "Message to show when the VTX Table has been loaded from a external source"
    },
    "vtxFrequencyChannel": {
        "message": "Enter frequency directly",
        "description": "Text of one of the fields of the VTX tab"
    },
    "vtxFrequencyChannelHelp": {
        "message": "If you enable this, the Configurator will let you select a frequency in place of the habitual band/channel. For this to work your VTX must support this feature.",
        "description": "Help text for the frequency or channel select field of the VTX tab"
    },
    "vtxSelectedMode": {
        "message": "Selected Mode",
        "description": "Title for the actual mode header of the VTX"
    },
    "vtxActualState": {
        "message": "Current Values",
        "description": "Title for the actual values header of the VTX"
    },
    "vtxType": {
        "message": "VTX Type",
        "description": "Text of one of the fields of the VTX tab"
    },
    "vtxType_0": {
        "message": "Unsupported",
        "description": "Text for one of the types of the VTX type in VTX tab"
    },
    "vtxType_1": {
        "message": "RTC607",
        "description": "Text for one of the types of the VTX type in VTX tab"
    },
    "vtxType_3": {
        "message": "SmartAudio",
        "description": "Text for one of the types of the VTX type in VTX tab"
    },
    "vtxType_4": {
        "message": "Tramp",
        "description": "Text for one of the types of the VTX type in VTX tab"
    },
    "vtxType_255": {
        "message": "Unknown",
        "description": "Text for one of the types of the VTX type in VTX tab"
    },
    "vtxBand": {
        "message": "Band",
        "description": "Text of one of the fields of the VTX tab"
    },
    "vtxBandHelp": {
        "message": "You can select here the band for your VTX",
        "description": "Help text for the band field of the VTX tab"
    },
    "vtxBand_0": {
        "message": "None",
        "description": "Text of one of the options for the band field of the VTX tab"
    },
    "vtxBand_X": {
        "message": "Band {{bandName}}",
        "description": "Text of one of the options for the band field of the VTX tab"
    },
    "vtxChannel_0": {
        "message": "None",
        "description": "Text of one of the options for the channel field of the VTX tab"
    },
    "vtxChannel_X": {
        "message": "Channel {{channelName}}",
        "description": "Text of one of the options for the channel field of the VTX tab"
    },
    "vtxPower_0": {
        "message": "None",
        "description": "Text of one of the options for the power field of the VTX tab"
    },
    "vtxPower_X": {
        "message": "Level {{powerLevel}}",
        "description": "Text of one of the options for the power field of the VTX tab"
    },
    "vtxChannel": {
        "message": "Channel",
        "description": "Text of one of the fields of the VTX tab"
    },
    "vtxChannelHelp": {
        "message": "You can select here the channel for your VTX",
        "description": "Help text for the channel field of the VTX tab"
    },
    "vtxFrequency": {
        "message": "Frequency",
        "description": "Text of one of the fields of the VTX tab"
    },
    "vtxFrequencyHelp": {
        "message": "You can select here the frequency for your VTX if it is supported",
        "description": "Help text for the frequency field of the VTX tab"
    },
    "vtxDeviceReady": {
        "message": "Device ready",
        "description": "Text of one of the fields of the VTX tab"
    },
    "vtxPower": {
        "message": "Power",
        "description": "Text of one of the fields of the VTX tab"
    },
    "vtxPowerHelp": {
        "message": "This is the power selected for the VTX. It can be modified if the $t(vtxPitMode.message) or the $t(vtxLowPowerDisarm.message) is enabled",
        "description": "Help text for the power field of the VTX tab"
    },
    "vtxPitMode": {
        "message": "Pit Mode",
        "description": "Text of one of the fields of the VTX tab"
    },
    "vtxPitModeHelp": {
        "message": "When enabled, the VTX enters in a very low power mode to let the quad be on at the bench without disturbing other pilots. Usually the range of this mode is less than 5m.<br /><br />NOTE: Some protocols, like SmartAudio, can't enable Pit Mode via software after power-up.",
        "description": "Help text for the pit mode field of the VTX tab"
    },
    "vtxPitModeFrequency": {
        "message": "Pit Mode frequency",
        "description": "Text of one of the fields of the VTX tab"
    },
    "vtxPitModeFrequencyHelp": {
        "message": "Frequency at which the Pit Mode changes when enabled.",
        "description": "Help text for the pit mode field of the VTX tab"
    },
    "vtxLowPowerDisarm": {
        "message": "Low Power Disarm",
        "description": "Text of one of the fields of the VTX tab"
    },
    "vtxLowPowerDisarmHelp": {
        "message": "When enabled, the VTX uses the lowest available power when disarmed (except if a failsafe has occurred).",
        "description": "Help text for the low power disarm field of the VTX tab"
    },
    "vtxLowPowerDisarmOption_0": {
        "message": "Off",
        "description": "One of the options for the Low Power Disarm mode of the VTX"
    },
    "vtxLowPowerDisarmOption_1": {
        "message": "On",
        "description": "One of the options for the Low Power Disarm mode of the VTX"
    },
    "vtxLowPowerDisarmOption_2": {
        "message": "On until first arm",
        "description": "One of the options for the Low Power Disarm mode of the VTX"
    },
    "vtxTable": {
        "message": "VTX Table",
        "description": "Text of the header of the VTX Table element in the VTX tab"
    },
    "vtxTablePowerLevels": {
        "message": "Number of power levels",
        "description": "Text of one of the fields of the VTX Table element in the VTX tab"
    },
    "vtxTablePowerLevelsHelp": {
        "message": "This defines the number of power levels supported by your VTX",
        "description": "Help for the number of power levels field of the VTX Table element in the VTX tab"
    },
    "vtxTablePowerLevelsTableHelp": {
        "message": "This table represents the different values of power that can be used for the VTX. They are divided into two: <br><b>- $t(vtxTablePowerLevelsValue.message):</b> each power level requires a value that is defined by the hardware manufacturer. Ask your manufacturer for the correct value or consult the Betaflight wiki of VTX Tables to grab some samples. <br><b>- $t(vtxTablePowerLevelsLabel.message):</b> you can put here the label you want for each power level value. It can be numbers (25, 200, 600, 1.2), letters (OFF, MIN, MAX) or a mix of them. <br /><br />You must configure <b>only</b> the power levels that are legal at your country.",
        "description": "Help for the table of power levels (value-label) that appears in the VTX tab"
    },
    "vtxTablePowerLevelsValue": {
        "message": "Value",
        "description": "Text of one of the fields of the VTX Table element in the VTX tab"
    },
    "vtxTablePowerLevelsLabel": {
        "message": "Label",
        "description": "Text of one of the fields of the VTX Table element in the VTX tab"
    },
    "vtxTableBands": {
        "message": "Number of bands",
        "description": "Text of one of the fields of the VTX Table element in the VTX tab"
    },
    "vtxTableChannels": {
        "message": "Number of channels by band",
        "description": "Text of one of the fields of the VTX Table element in the VTX tab"
    },
    "vtxTableBandsChannelsHelp": {
        "message": "This defines the number of bands and the number of channels by band that you want for your VTX.",
        "description": "Help for the number of bands and channels field of the VTX Table element in the VTX tab"
    },
    "vtxTableBandTitleName": {
        "message": "Name",
        "description": "Text of one of the titles of the VTX Table element in the VTX tab"
    },
    "vtxTableBandTitleLetter": {
        "message": "Letter",
        "description": "Text of one of the titles of the VTX Table element in the VTX tab"
    },
    "vtxTableBandTitleFactory": {
        "message": "Factory",
        "description": "Text of one of the titles of the VTX Table element in the VTX tab"
    },
    "vtxTableBandsChannelsTableHelp": {
        "message": "This table represents all the frequencies that can be used for your VTX. You can have several bands and for each band you must configure:<br><b>- $t(vtxTableBandTitleName.message):</b> Name that you want to assign to this band, like BOSCAM_A, FATSHARK or RACEBAND.<br><b>- $t(vtxTableBandTitleLetter.message):</b> Short letter that references the band.<br><b>- $t(vtxTableBandTitleFactory.message):</b> This indicates if it is a factory band. If enabled Betaflight sends to the VTX a band and channel number. The VTX will then use its built-in frequency table and the frequencies configured here are only to show the value in the OSD and other places. If it is not enabled, then Betaflight will send to the VTX the real frequency configured here.<br><b>- Frequencies:</b> Frequencies for this band.<br /><br />Remember that not all frequencies are legal at your country. You must put a value of <b>zero</b> to each frequency index that you are not allowed to use to disable it.",
        "description": "Help for the table of bands-channels that appears in the VTX tab"
    },

    "vtxSavedFileOk": {
        "message": "VTX Config file <span class=\"message-positive\">saved</span>",
        "description": "Message in the GUI log when the VTX Config file is saved"
    },
    "vtxSavedFileKo": {
        "message": "<span class=\"message-negative\">Error</span> while saving the VTX Config file",
        "description": "Message in the GUI log when the VTX Config file is saved"
    },
    "vtxLoadFileOk": {
        "message": "VTX Config file <span class=\"message-positive\">loaded</span>",
        "description": "Message in the GUI log when the VTX Config file is loaded"
    },
    "vtxLoadFileKo": {
        "message": "<span class=\"message-negative\">Error</span> while loading the VTX Config file",
        "description": "Message in the GUI log when the VTX Config file is loaded"
    },
    "vtxLoadClipboardOk": {
        "message": "VTX Config info <span class=\"message-positive\">loaded</span> from clipboard",
        "description": "Message in the GUI log when the VTX Config file is pasted from clipboard"
    },
    "vtxLoadClipboardKo": {
        "message": "<span class=\"message-negative\">Error</span> while loading the VTX Config info from clipboard. Maybe the contents are not correct",
        "description": "Message in the GUI log when the VTX Config file is pasted from clipboard"
    },
    "vtxButtonSaveFile": {
        "message": "Save to file",
        "description": "Save to file button in the VTX tab"
    },
    "vtxButtonSaveLua": {
        "message": "Save Lua Script",
        "description": "Save Lua script button in the VTX tab"
    },
    "vtxLuaFileHelp" :{
        "message": "The '$t(vtxButtonSaveLua.message)' button will allow you to save a <i>mcuid</i>.lua file containing the VTX table configuration that can be used with the <a href=\"https://github.com/betaflight/betaflight-tx-lua-scripts/\" target=\"_blank\" rel=\"noopener noreferrer\">Betaflight TX Lua Scripts</a>.<br><br>Version 1.6.0 and above can use the file as is, but for older versions of the scripts it should be renamed to match the modelname on the TX.",
        "description": "Tooltip message for the Save Lua script button in the VTX tab"
    },
    "vtxButtonLoadFile": {
        "message": "Load from file",
        "description": "Load to file button in the VTX tab"
    },
    "vtxButtonLoadClipboard": {
        "message": "Load from clipboard",
        "description": "Paste from clipboard button in the VTX tab"
    },
    "vtxButtonSave": {
        "message": "Save",
        "description": "Save button in the VTX tab"
    },
    "vtxButtonSaved": {
        "message": "Saved",
        "description": "Saved action button in the VTX tab"
    },
    "vtxSmartAudioUnlocked": {
        "message": "{{version}} unlocked",
        "description": "Indicates if SA device is unlocked"
    },

    "mainHelpArmed": {
        "message": "Motor Arming"
    },
    "mainHelpFailsafe": {
        "message": "Failsafe Mode"
    },
    "mainHelpLink": {
        "message": "Serial Link Status"
    },
    "configurationEscProtocol": {
        "message": "ESC/Motor protocol"
    },
    "configurationEscProtocolHelp": {
        "message": "Select your motor protocol. <br>Make sure to verify the protocol is supported by your ESC, this information should be on the makers website. <br> <b>Be carefull using DSHOT900 and DSHOT1200 as not many ESC's support it!</b>"
    },
    "configurationEscProtocolHelpNoDSHOT1200": {
        "message": "Select your motor protocol. <br>Make sure to verify the protocol is supported by your ESC, this information should be on the makers website."
    },
    "configurationunsyndePwm": {
        "message": "Motor PWM speed Separated from PID speed"
    },
    "configurationUnsyncedPWMFreq": {
        "message": "Motor PWM frequency"
    },
    "configurationDshotBidir": {
        "message": "Bidirectional DShot (requires supported ESC firmware)",
        "description": "Feature for the ESC/Motor"
    },
    "configurationDshotBidirHelp": {
        "message": "Sends ESC data to the FC via DShot telemetry.  Required by RPM Filtering and dynamic idle. <br> <br>Note: Requires a compatible ESC with appropriate firmware, eg JESC, Jazzmac, BLHeli-32.",
        "description": "Description of the Bidirectional DShot feature of the ESC/Motor"
    },
    "configurationGyroSyncDenom": {
        "message": "Gyro update frequency"
    },
    "configurationPidProcessDenom": {
        "message": "PID loop frequency"
    },
    "configurationPidProcessDenomHelp": {
        "message": "The maximum frequency for the PID loop is limited by the maximum frequency that updates can be sent by the chosen ESC / motor protocol."
    },
    "configurationGyroUse32kHz": {
        "message": "Enable gyro 32kHz sampling mode"
    },
    "configurationGyroUse32kHzHelp": {
        "message": "32 kHz gyro update frequency is only possible if the gyro chip supports it (currently MPU6500, MPU9250, and ICM20xxx if connected over SPI). If in doubt, consult the specification for your board."
    },
    "configurationAccHardware": {
        "message": "Accelerometer"
    },
    "configurationBaroHardware": {
        "message": "Barometer (if supported)"
    },
    "configurationMagHardware": {
        "message": "Magnetometer (if supported)"
    },
    "configurationSmallAngle": {
        "message": "Maximum ARM Angle [degrees]"
    },
    "configurationSmallAngleHelp": {
        "message": "Craft will not ARM if tilted more than specified number of degrees. Only applies if accelerometer is enabled. Setting to 180 will effectivly disable check"
    },
    "configurationBatteryVoltage": {
        "message": "Battery Voltage"
    },
    "configurationBatteryCurrent": {
        "message": "Battery Current"
    },
    "configurationBatteryMeterType": {
        "message": "Battery Meter Type"
    },
    "configurationBatteryMinimum": {
        "message": "Minimum Cell Voltage"
    },
    "configurationBatteryMaximum": {
        "message": "Maximum Cell Voltage"
    },
    "configurationBatteryWarning": {
        "message": "Warning Cell Voltage"
    },
    "configurationBatteryScale": {
        "message": "Voltage Scale"
    },
    "configurationCurrentMeterType": {
        "message": "Current Meter Type"
    },
    "configurationCurrent": {
        "message": "Current Sensor"
    },
    "configurationCurrentScale": {
        "message": "Scale the output voltage to milliamps [1/10th mV/A]"
    },
    "configurationCurrentOffset": {
        "message": "Offset in millivolt steps"
    },
    "configurationBatteryMultiwiiCurrent": {
        "message": "Enable support for legacy Multiwii MSP current output"
    },
    "pidTuningProfile": {
        "message": "Profile"
    },
    "pidTuningProfileTip": {
        "message": "Up to 3 (2 for some controllers) different pid profiles can be stored on the flight controller. The pid profiles include pid, d setpoint and angle/horizon settings on this tab. Once in the field, simple stick commands (see online instructions) can be used to switch between the profiles."
    },
    "pidTuningRateProfile": {
        "message": "Rateprofile"
    },
    "pidTuningRateProfileTip": {
        "message": "Up to 3 different rateprofiles per profile can be stored on the flight controller. The rateprofiles include the settings for 'RC Rate', 'Rate', 'RC Expo', 'Throttle', and 'TPA'. Switching between rateprofiles is possible in-flight, by setting up a 3 position switch for 'Rate Profile Selection' on the 'Adjustments' tab."
    },
    "pidTuningRateSetup": {
        "message": "Basic/Acro Rates"
    },
    "pidTuningRateSetupHelp": {
        "message": "Adjust these values to set your rates. Use RC Rate to increase maximum rate overall, use Super Rate to have higher rates at the end of the stick travel, use RC Expo to make the middle stick feel smooth.",
        "description": "Rate table helpicon message"
    },
    "pidTuningDelta": {
        "message": "Derivative Method"
    },
    "pidTuningDeltaError": {
        "message": "Error"
    },
    "pidTuningDeltaMeasurement": {
        "message": "Measurement"
    },
    "pidTuningDeltaTip": {
        "message": "<b>Derivative from Error</b> provides more direct stick response and is mostly prefered for Racing.<br /><br /><b>Derivative from Measurement</b> provides smoother stick response what is more usefull for freestyling"
    },
    "pidTuningPidControllerTip": {
        "message": "<b>Legacy vs Betaflight (float):</b> PID scaling and PID logic is exactly the same. Not necessarily retune needed. Legacy is old betaflight evolved rewrite, which is basic PID controller based on integer math. Betaflight PID controller uses floating point math and has many new features specifically designed for multirotor applications <br> <b>Float vs Integer:</b> PID scaling and PID logic is exactly the same. No retune needed. F1 boards have no onboard FPU and floating point math increases CPU load and integer math will improve performance, but float math might gain slightly more precision."
    },
    "pidTuningFilterTip": {
        "message": "<b>Gyro Soft Filter:</b> Lowpass filter for gyro. Use lower value for more filtering.<br><b>D Term Filter:</b> Lowpass filter for Dterm. Can affect D tuning. Use lower value for more filtering. <br><b>Yaw Filter:</b> Filters yaw output. It can help on setups with noisy yaw axis."
    },
    "pidTuningRatesTip": {
        "message": "Play with the rates and see how those affect the stick curve"
    },
    "configurationCamera": {
        "message": "Camera"
    },
    "configurationPersonalization": {
        "message": "Personalization"
    },
    "craftName": {
        "message": "Craft name"
    },
    "configurationFpvCamAngleDegrees": {
        "message": "FPV Camera Angle [degrees]"
    },
    "onboardLoggingBlackbox": {
        "message": "Blackbox logging device"
    },
    "onboardLoggingRateOfLogging": {
        "message": "Blackbox logging rate"
    },
    "onboardLoggingDebugMode": {
        "message": "Blackbox debug mode"
    },
    "onboardLoggingDebugModeUnknown": {
        "message": "UNKNOWN"
    },
    "onboardLoggingSerialLogger": {
        "message": "Outboard serial logging device"
    },
    "onboardLoggingFlashLogger": {
        "message": "Onboard dataflash chip"
    },
    "onboardLoggingEraseInProgress": {
        "message": "Erase in progress, please wait..."
    },
    "onboardLoggingOnboardSDCard": {
        "message": "Onboard SD card"
    },
    "onboardLoggingMsc": {
        "message": "Mass Storage Mode"
    },
    "onboardLoggingMscNote": {
        "message": "Reboot into <strong>mass storage device (MSC)</strong> mode. Once activated, the onboard flash or SD card on your flight controller will be recognised as a storage device by your computer, and allow you to download your log files. Eject and power cycle your flight controller to leave mass storage device mode."
    },
    "onboardLoggingRebootMscText": {
        "message": "Activate Mass Storage Device Mode"
    },
    "onboardLoggingMscNotReady": {
        "message": "Mass storage mode can not be activated because the storage device is not ready."
    },
    "dialogConfirmResetTitle": {
        "message": "Confirm"
    },
    "dialogConfirmResetNote": {
        "message": "WARNING: Are you sure you want to reset ALL settings to default?"
    },
    "dialogConfirmResetConfirm": {
        "message": "Reset"
    },
    "dialogConfirmResetClose": {
        "message": "Cancel"
    },
    "modeCameraWifi": {
        "message": "CAMERA WI-FI BUTTON"
    },
    "modeCameraPower": {
        "message": "CAMERA POWER BUTTON"
    },
    "modeCameraChangeMode": {
        "message": "CAMERA CHANGE MODE"
    },
    "flashTab": {
        "message": "Update Firmware"
    },
    "cliAutoComplete": {
        "message": "Advanced CLI AutoComplete"
    },
    "darkTheme": {
        "message": "Enable dark theme"
    },
    "pidTuningRatesType": {
        "message": "Rates Type"
    },
    "pidTuningRatesTypeTip": {
        "message": "Changing rates type will change the rates curve and the way you can set it"
    },
    "pidTuningRcRateRaceflight": {
        "message": "Rate"
    },
    "pidTuningRcExpoRaceflight": {
        "message": "Expo"
    },
    "pidTuningRateRaceflight": {
        "message": "Acro+"
    },
    "pidTuningRcExpoKISS": {
        "message": "RC Curve"
    },
    "pidTuningRateQuickRates": {
        "message": "Max Rate"
    },
    "pidTuningRcRateActual": {
        "message": "Center Sensitivity"
    },
    "dialogRatesTypeTitle": {
        "message": "Rates type change"
    },
    "dialogRatesTypeNote": {
        "message": "<span class=\"message-negative\"><b>WARNING: You are changing the rates type.</b></span> If you change the rates type your rates will be set to a default curve."
    },
    "dialogRatesTypeConfirm": {
        "message": "Change"
    },
    "gpsSbasAutoDetect": {
        "message": "Auto-detect",
        "description": "One of the options selectable for the GPS SBAS system"
    },
    "gpsSbasEuropeanEGNOS": {
        "message": "European EGNOS",
        "description": "One of the options selectable for the GPS SBAS system"
    },
    "gpsSbasNorthAmericanWAAS": {
        "message": "North American WAAS",
        "description": "One of the options selectable for the GPS SBAS system"
    },
    "gpsSbasJapaneseMSAS": {
        "message": "Japanese MSAS",
        "description": "One of the options selectable for the GPS SBAS system"
    },
    "gpsSbasIndianGAGAN": {
        "message": "Indian GAGAN",
        "description": "One of the options selectable for the GPS SBAS system"
    },
    "gpsSbasNone": {
        "message": "None",
        "description": "One of the options selectable for the GPS SBAS system"
    },
    "dialogFileNameTitle": {
        "message": "File name"
    },
    "dialogFileNameDescription": {
        "message": "The file will be saved in the 'Android/data/betaflight-configurator/{{folder}}' folder in your internal storage."
    },
    "dialogFileAlreadyExistsTitle": {
        "message": "This file already exists!"
    },
    "dialogFileAlreadyExistsDescription": {
        "message": "Overwrite ?"
    },
    "cordovaCheckingWebview": {
        "message": "Checking webview applications ..."
    },
    "cordovaIncompatibleWebview": {
        "message": "Incompatible webview"
    },
    "cordovaWebviewTroubleshootingMsg": {
        "message": "You must update your device's webview in order to use the configurator."
    },
    "cordovaWebviewTroubleshootingMsg2": {
        "message": "The tool below is intended to help you to install a new webview or to update an already installed webview."
    },
    "cordovaAvailableWebviews": {
        "message": "Available webview applications on your device"
    },
    "cordovaWebviewInstall": {
        "message": "Installing the <b>{{app}}</b> app can resolve this compatibility issue."
    },
    "cordovaWebviewInstallBtn": {
        "message": "Install from the Google Play Store"
    },
    "cordovaWebviewUninstall": {
        "message": "Uninstalling the <b>{{app}}</b> app can resolve this compatibility issue. If you are not able to uninstall it, try to disable it from the settings app."
    },
    "cordovaWebviewUninstallBtn1": {
        "message": "Uninstall from the Google Play Store"
    },
    "cordovaWebviewUninstallBtn2": {
        "message": "Uninstall / disable from the settings"
    },
    "cordovaWebviewUpdate": {
        "message": "Updating the <b>{{app}}</b> app can resolve this compatibility issue."
    },
    "cordovaWebviewUpdateBtn": {
        "message": "Update from the Google Play Store"
    },
    "cordovaWebviewEnable": {
        "message": "Go into the tab of informations about your device in the settings and tap 10 times on the build version number to enable 'Developper options'. After that, search and go in the developper options and select <b>{{app}}</b> as webview provider."
    },
    "cordovaWebviewEnableBtn": {
        "message": "Open settings"
    },
    "cordovaWebviewIncompatible": {
        "message": "Your device seems to be not compatible. Try to search other ways to update your webview"
    },
    "cordovaNoWebview": {
        "message": "No webview application installed / enabled"
    },
    "cordovaWebviewUsed": {
        "message": "used"
    },
    "cordovaExitAppTitle": {
        "message": "Confirmation"
    },
    "cordovaExitAppMessage": {
        "message": "Do you really want to close the configurator?"
    },
    "dropDownSelectAll": {
        "message": "[Select/deselect all]",
        "description": "Select all item in the drop down/multiple select"
    },
    "dropDownFilterDisabled": {
        "message": "Select...",
        "description": "Text indicating nothing is selected in the drop down/multiple select (filter disabled)"
    },
    "dropDownAll": {
        "message": "All",
        "description": "Text indicating everything is selected in the drop down/multiple select"
    },
    "tabPresets": {
        "message": "Presets",
        "description": "Presets tab title"
    },
    "presetsReload": {
        "message": "Reload",
        "description": "Text on the reload button that appears when there in an error loading presets index"
    },
    "presetsAuthor": {
        "message": "Author:",
        "description": "Hint text in the presets detailed dialog"
    },
    "presetsKeywords": {
        "message": "Keywords:",
        "description": "Hint text in the presets detailed dialog"
    },
    "presetsVersions": {
        "message": "Firmware:",
        "description": "Hint text in the presets detailed dialog"
    },
    "presetsOfficial": {
        "message": "Official",
        "description": "Hint text in the presets detailed dialog indication preset is official"
    },
    "presetsCommunity": {
        "message": "Community",
        "description": "Hint text in the presets detailed dialog indication preset is not official but community"
    },
    "presetsExperimental": {
        "message": "Experimental",
        "description": "Hint text in the presets detailed dialog indication preset is not official but experimental"
    },
    "presetsApply": {
        "message": "Pick",
        "description": "Button to pick a preset"
    },
    "presetsViewOnline": {
        "message": "View online&hellip;",
        "description": "Link text for opening preset file online"
    },
    "presetsOpenDiscussion": {
        "message": "Discussion&hellip;",
        "description": "Link text for opening preset discussion"
    },
    "presetsShowCli": {
        "message": "Show CLI",
        "description": "Button to show CLI code of a preset"
    },
    "presetsHideCli": {
        "message": "Hide CLI",
        "description": "Button to hide CLI code of a preset"
    },
    "presetsOptions": {
        "message": "Options",
        "description": "Text label for Options drop down select"
    },
    "presetsFilterCategory": {
        "message": "Categories",
        "description": "UI filter name"
    },
    "presetsFilterKeyword": {
        "message": "Keywords",
        "description": "UI filter name"
    },
    "presetsFilterAuthor": {
        "message": "Authors",
        "description": "UI filter name"
    },
    "presetsFilterFirmware": {
        "message": "Firmwares",
        "description": "UI filter name"
    },
    "presetsFilterStatus": {
        "message": "Status",
        "description": "UI filter name - official/community/experimental"
    },
    "presetsLoadError": {
        "message": "Error loading presets from the internet",
        "description": "Error report when failed to load presets index or a specific preset"
    },
    "presetsButtonSave": {
        "message": "Save and Reboot",
        "description": "A button that saves all appied presets - analog to 'save' command in CLI"
    },
    "presetsButtonCancel": {
        "message": "Cancel",
        "description": "A button that restarts FC without saving appied presets - analog to 'exit' command in CLI"
    },
    "presetsApplyingPresets": {
        "message": "Applying configuration...",
        "description": "First label in the progress dialog when applying configuration (presets or user config)"
    },
    "presetsPleaseWait": {
        "message": "Please wait.",
        "description": "Second label in the progress dialog when applying presets"
    },
    "presetsCliErrorsWaring": {
        "message": "<span class='message-negative'>WARNING!</span><br/>Configuration has been applied with CLI errors.",
        "description": "Text to show when there are CLI errors after applying presets or user configuration"
    },
    "presetsSaveAnyway": {
        "message": "Save anyway",
        "description": "Save anyway button on the CLI errors presets dialog"
    },
    "presetsWarningDialogTitle": {
        "message": "WARNING!",
        "description": "Warning title in the warning dialog in the presets"
    },
    "presetsWarningDialogYesButton": {
        "message": "Agree",
        "description": "Agree button in the presets warning dialog"
    },
    "presetsWarningDialogNoButton": {
        "message": "Cancel",
        "description": "Cancel button in the presets warning dialog"
    },
    "presetsWiki": {
        "message": "Presets Wiki",
        "description": "Button to open Presets Wiki link"
    },
    "presetsBackupSave": {
        "message": "Save backup",
        "description": "Button to backup current configuration to file"
    },
    "presetsBackupLoad": {
        "message": "Load backup",
        "description": "Button to load backup from the file"
    },
    "presetsLoadingDumpAll": {
        "message": "Loading current configuration from the flight controller",
        "description": "Title for the waiting dialog when loading dump all into a file"
    },
    "dumpAllNotSavedWarning": {
        "message": "Error occured while saving current configuration",
        "description": "Message appears on presets tab when saving current diff all into a file has failed"
    },
    "presetSources": {
        "message": "Preset sources...",
        "description": "A button to show preset sources dialog"
    },
    "presetsSourcesDialogTitle": {
        "message": "Preset sources",
        "description": "A button to show preset sources dialog"
    },
    "presetsSourcesDialogAddNew": {
        "message": "Add new source",
        "description": "A button to show preset sources dialog"
    },
    "presetsSourcesDialogDefaultSourceName": {
        "message": "New Custom Preset Source",
        "description": "A default preset source (repo) name"
    },
    "presetsSourcesDialogSaveSource": {
        "message": "Save",
        "description": "Presets tab, sources dialog, button to save new or editable source"
    },
    "presetsSourcesDialogResetSource": {
        "message": "Reset",
        "description": "Presets tab, sources dialog, button to reset source after modifications"
    },
    "presetsSourcesDialogMakeSourceActive": {
        "message": "Make Active",
        "description": "Presets tab, sources dialog, button to make selected source active"
    },
    "presetsSourcesDialogDeleteSource": {
        "message": "Delete",
        "description": "Presets tab, sources dialog, button to delete selected source"
    },
    "presetsWarningNotOfficialSource": {
        "message": "<span class=\"message-negative\">WARNING!</span> A third party preset source is selected.",
        "description": "Warning message that shows up when a third party preset source is selected"
    },
    "presetsWarningBackup": {
        "message": "Please make sure you backup your current configuration ('$t(presetsBackupSave.message)' button or via CLI if the button is disabled) <strong>before</strong> picking and applying presets. Otherwise there is no way to return to previous configuration after applying presets.",
        "description": "Warning message that shows up at the top of the presets tab"
    },
    "presets_sources_dialog_warning": {
        "message": "<span class=\"message-negative\">WARNING!</span> Using third party preset sources could be dangerous.<br/>Make sure you add and use only trusted sources. Malicious or bad preset sources will break your drone configuration and can potentially harm your devices.",
        "description": "Warning message that shows up at the top of the preset sources dialog"
    },
    "presetsWarningWrongVersionConfirmation": {
        "message": "Picked preset requires firmware version $1<br/> Current firmware version is $2",
        "description": "Warning message that shows up at the top of the preset sources dialog"
    },
    "presetsNoPresetsFound": {
        "message": "No presets found for the given search paramteres",
        "description": "Message that apprears on presets tab if no presets were found"
    },
    "presetsTooManyPresetsFound": {
        "message": "Reached the maximum limit of the shown presets number",
        "description": "Message that apprears on presets tab if too many presets found"
    },
    "presetsOptionsPlaceholder": {
        "message": "ATTENTION! Review the list of options",
        "description": "Placeholder for the options list dropdown"
    },
    "presetsVersionMismatch": {
        "message": "Preset source version mismatch.<br/>Required version: {{versionRequired}}<br/>Preset source version: {{versionSource}}<br/>Using this preset source could be dangerous.<br/>Do you want to continue?",
        "description": "Placeholder for the options list dropdown"
    },
    "presetsReviewOptionsWarning": {
        "message": "Please, review the list of options before picking this preset.",
        "description": "Dialog text to prompt user to review options for the preset"
    }
}
