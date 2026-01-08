# Sonoff eWeLink QR Code Generator

A simple, responsive web application for generating pairing QR codes for Sonoff IoT devices. This tool helps users who have lost their physical QR codes to quickly generate new ones for device pairing with the eWeLink app.

## 🎯 Purpose

Sonoff devices require pairing with the eWeLink mobile app to connect to your network. The standard pairing process uses QR codes that come with the device. However, these paper QR codes are easily lost or damaged. This tool provides a convenient way to regenerate those QR codes using just the device ID.

## 📖 How to Use

1. **Enter Pairing Mode**: Press and hold your Sonoff device's button for about 5 seconds until it enters pairing mode
2. **Find Device ID**: On your phone or computer, search for WiFi networks starting with `ITEAD-`. The characters after `ITEAD-` are your device ID
3. **Generate QR Code**: Enter the device ID into the input field on this page and click "Generate QR Code"
4. **Scan with eWeLink**: Open the eWeLink app and scan the generated QR code to complete pairing

## 🔗 QR Code Format

The generated QR codes follow the Sonoff/eWeLink pairing format:

```
https://api.coolkit.cn/add-ap-device?brand=ewelink&ssid=ITEAD-{DEVICE_ID}
```

Where `{DEVICE_ID}` is the unique identifier found in your device's WiFi SSID.

## ⚠️ Disclaimer

This is an **unofficial** tool created for convenience purposes only. It comes with **no warranty or guarantees** of any kind. All trademarks including Sonoff and eWeLink are the property of their respective owners.

Use this tool at your own risk. The authors are not responsible for any issues that may arise from using this tool.

## 💡 Why This Tool?

Sonoff devices are popular IoT switches and sensors, but the QR code pairing method, while convenient, has a major flaw: the paper QR codes are easily lost. Since the QR code format is straightforward and predictable, this tool provides a simple solution to regenerate them without needing to contact support or purchase replacement codes.

---

Generated with ❤️ and AI
