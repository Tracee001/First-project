import React from 'react'

function Privacy() {
  return (
   <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
    <h1 className="text-4xl font-extrabold text-gray-800 mb-6 border-b pb-2">Privacy Policy</h1>

    <p className="text-gray-600 mb-6">
      At <span className="font-semibold text-gray-800">ModernBlog</span>, we value your privacy and are committed to protecting your personal information.
    </p>

    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Information We Collect</h2>
        <p className="text-gray-600">
          We may collect personal information such as your name, email address, and other contact details when you register on our site or interact with our content.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">How We Use Your Information</h2>
        <p className="text-gray-600">
          We use your information to provide and improve our services, communicate with you, and personalize your experience on our platform.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Cookies</h2>
        <p className="text-gray-600">
          Our website uses cookies to enhance your browsing experience. You can choose to accept or decline cookies through your browser settings.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Your Rights</h2>
        <p className="text-gray-600">
          You have the right to access, correct, or delete your personal information at any time. Please contact us if you have any questions or concerns.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Changes to This Policy</h2>
        <p className="text-gray-600">
          We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
        </p>
      </div>
    </div>
  </div>
</div>

  )
}

export default Privacy;
