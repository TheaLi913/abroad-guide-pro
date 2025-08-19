import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, MessageCircle, QrCode } from "lucide-react";
import { useState } from "react";
import wechatQr from "@/assets/wechat-qr.jpg";

interface WeChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WeChatModal = ({ isOpen, onClose }: WeChatModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="relative max-w-md w-full p-6 bg-gradient-card">
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4"
          onClick={onClose}
        >
          <X size={20} />
        </Button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageCircle size={28} className="text-primary-foreground" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Book Your Session
          </h3>
          <p className="text-muted-foreground text-sm">
            Scan the QR code to add our sales consultant on WeChat and start your academic journey
          </p>
        </div>

        {/* QR Code */}
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-background rounded-lg shadow-soft">
            <img
              src={wechatQr}
              alt="WeChat QR Code"
              className="w-48 h-48 object-contain"
            />
          </div>
        </div>

        {/* Instructions */}
        <div className="space-y-3 text-sm text-muted-foreground">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary text-xs font-semibold">1</span>
            </div>
            <span>Open WeChat and tap the "+" icon in the top right corner</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary text-xs font-semibold">2</span>
            </div>
            <span>Select "Scan QR Code" and scan the code above</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary text-xs font-semibold">3</span>
            </div>
            <span>Send a message with your tutoring needs to get started</span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            Available 24/7 • Fast Response • Professional Service
          </p>
        </div>
      </Card>
    </div>
  );
};

// Global WeChat booking function
let globalOpenBooking: (() => void) | null = null;

export const WeChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  globalOpenBooking = () => setIsModalOpen(true);

  return (
    <>
      {children}
      <WeChatModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export const openBookingModal = () => {
  if (globalOpenBooking) {
    globalOpenBooking();
  }
};

export default WeChatModal;