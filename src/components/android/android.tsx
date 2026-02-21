export default function DesktopMockup() {
  return (
    <div className="w-full flex justify-center py-16">
      <div className="w-full max-w-5xl">
        
        {/* Laptop screen */}
        <div className="bg-neutral-900 rounded-t-2xl p-2 shadow-2xl">
          <div className="bg-black rounded-t-xl p-1">
            <div className="bg-white rounded-lg overflow-hidden aspect-video">
              <iframe
                className="w-full h-full"
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/zM0KQFssP27RVr1M5qzrPG/DonMorfi-web?node-id=59-564&t=HxDyV3D4QiGbrlQ9-0&scaling=scale-down-width&content-scaling=fixed&page-id=59%3A41&starting-point-node-id=59%3A564"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Base */}
        <div className="bg-neutral-800 h-6 rounded-b-2xl shadow-md relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-1 w-24 h-1 bg-neutral-600 rounded-full" />
        </div>

      </div>
    </div>
  );
}