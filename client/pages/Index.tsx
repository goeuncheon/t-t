import BottomNav from "@/components/BottomNav";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Main Screen with Fixed Aspect Ratio */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-sm aspect-[9/16] bg-white overflow-hidden flex items-center justify-center">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets%2F54789b7bb2db40c3bb59c5ad8b27d3a0%2F4360c10aa0e34ab49b46d695ccb5447c?format=webp&width=800" 
            alt="Main Screen" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav currentPage="home" />
    </div>
  );
}
