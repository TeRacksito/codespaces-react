export function VideoPage() {
  return (
    <div className="flex flex-col items-center py-12 px-4 max-w-4xl mx-auto">
      {/* Title with decorative underline */}
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Video promocional
      </h1>
      <div className="w-24 h-1 bg-blue-600 mb-6 rounded-full"></div>

      {/* Video container with shadow and border */}
      <div className="w-full bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden mb-6">
        <video
          id="my-video"
          className="video-js w-full mx-auto"
          controls
          preload="auto"
          width="640"
          height="264"
          poster="/thumb.png"
          data-setup="{}"
        >
          <source src="/promo_icero_n.mp4" type="video/mp4" />
          <source src="/promo_icero_n.webm" type="video/webm" />
          <p className="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading
            to a web browser that
            <a
              href="https://videojs.com/html5-video-support/"
              target="_blank"
              rel="noreferrer"
            >
              supports HTML5 video
            </a>
          </p>
        </video>
      </div>

      {/* Description with decorative quote marks */}
      <div className="text-center max-w-2xl mx-auto relative">
        <div className="text-blue-600 text-6xl absolute -top-6 left-0 opacity-20">
          "
        </div>
        <p className="text-gray-700 mb-4 px-8">
          Descubre cómo iCero puede ayudarte a mejorar tu empresa.
        </p>
        <div className="text-blue-600 text-6xl absolute -bottom-12 right-0 opacity-20">
          "
        </div>
      </div>

      {/* Tags with subtle design */}
      <div className="flex flex-wrap justify-center gap-2 mt-8">
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
          #digitalización
        </span>
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
          #web
        </span>
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
          #informática
        </span>
      </div>

      <script src="https://vjs.zencdn.net/8.22.0/video.min.js"></script>
    </div>
  );
}
