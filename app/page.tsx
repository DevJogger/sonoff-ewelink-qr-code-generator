'use client'

import { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'

export default function Home() {
  const [deviceId, setDeviceId] = useState('')
  const [qrCodeUrl, setQrCodeUrl] = useState('')

  const generateQRCode = () => {
    if (deviceId.trim()) {
      const url = `https://api.coolkit.cn/add-ap-device?brand=ewelink&ssid=ITEAD-${deviceId.trim()}`
      setQrCodeUrl(url)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      generateQRCode()
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-lime-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Sonoff eWeLink QR Code Generator
          </h1>
          <p className="text-lg text-gray-600">
            Generate pairing QR codes for your Sonoff IoT devices
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8 mb-8">
          {/* Input Section */}
          <div className="mb-6">
            <label
              htmlFor="deviceId"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Device ID
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                id="deviceId"
                type="text"
                maxLength={10}
                value={deviceId}
                onChange={(e) => setDeviceId(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Enter device ID (e.g., 1000abcdef)"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500 focus:border-transparent outline-none transition text-background"
              />
              <button
                onClick={generateQRCode}
                className="px-6 py-2 bg-lime-600 text-white font-medium rounded-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 transition"
              >
                Generate QR Code
              </button>
            </div>
          </div>

          {/* QR Code Display */}
          {qrCodeUrl && (
            <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg">
              <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                <QRCodeSVG
                  value={qrCodeUrl}
                  size={256}
                  level="H"
                  includeMargin={true}
                />
              </div>
              <p className="text-sm text-gray-600 text-center break-all max-w-full">
                {qrCodeUrl}
              </p>
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use</h2>
          <ol className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-lime-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </span>
              <span>
                Put your device into pairing mode (for most devices, press and
                hold the switch button for 5 seconds)
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-lime-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </span>
              <span>
                Use your phone or computer to search for WiFi networks and look
                for an SSID starting with{' '}
                <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                  ITEAD-
                </code>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-lime-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </span>
              <span>
                The characters following{' '}
                <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                  ITEAD-
                </code>{' '}
                are your device ID (e.g., if the SSID is{' '}
                <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                  ITEAD-1000abcdef
                </code>
                , then the device ID is{' '}
                <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                  1000abcdef
                </code>
                )
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-lime-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </span>
              <span>
                Enter the device ID in the input field above and click the
                &quot;Generate QR Code&quot; button
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-lime-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                5
              </span>
              <span>
                Open the eWeLink app on your phone and scan the generated QR
                code to pair your device
              </span>
            </li>
          </ol>
        </div>

        {/* Disclaimer */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 sm:p-8">
          <h2 className="text-xl font-bold text-yellow-900 mb-3">
            ⚠️ Disclaimer
          </h2>
          <p className="text-yellow-800 text-sm leading-relaxed">
            This page is <strong>unofficial</strong> and created only for
            convenience purposes. It comes with{' '}
            <strong>no warranty or guarantees</strong> of any kind. All
            trademarks including Sonoff and eWeLink are the property of their
            respective owners.
          </p>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-600 text-sm">
          <p>Made for Sonoff device owners who lost their QR codes</p>
        </div>
      </div>
    </main>
  )
}
