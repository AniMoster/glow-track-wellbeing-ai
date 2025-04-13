
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { DumbbellIcon } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Auto-redirect to dashboard after a brief delay
    const timer = setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [navigate]);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-deep-dark to-deep-dark-card">
      <div className="text-center max-w-md px-4">
        <div className="mb-8 flex justify-center">
          <div className="h-20 w-20 rounded-full bg-gold animate-pulse-glow flex items-center justify-center">
            <DumbbellIcon className="h-10 w-10 text-deep-dark" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-gradient gold-gradient">Glow</span>
          <span className="text-white">Track</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Your premium wellness companion
        </p>
        <Button 
          onClick={() => navigate('/dashboard')} 
          className="bg-gold hover:bg-gold-dark text-deep-dark font-medium px-8 py-6 text-lg"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Index;
