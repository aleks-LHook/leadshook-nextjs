"use client";

export function ParallaxSection() {
  return (
    <div 
      className="absolute top-0 bottom-0 right-0 overflow-x-hidden overflow-y-auto"
      style={{ 
        perspective: '100px',
        height: '100vh',
        left: '50%',
        marginLeft: '-1500px'
      }}
    >
      {/* Background layers - furthest back */}
      <div 
        className="absolute inset-0"
        style={{ transform: 'translateZ(-300px) scale(4)' }}
      >
        <img 
          src="/images/layer 1.png" 
          alt="Background layer"
          style={{ 
            display: 'block',
            position: 'absolute',
            bottom: 0,
            maxWidth: 'none',
            height: 'auto'
          }}
        />
      </div>
      
      <div 
        className="absolute inset-0"
        style={{ transform: 'translateZ(-250px) scale(3.5)' }}
      >
        <img 
          src="/images/layer 2.png" 
          alt="Layer 2"
          style={{ 
            display: 'block',
            position: 'absolute',
            bottom: 0,
            maxWidth: 'none',
            height: 'auto'
          }}
        />
      </div>
      
      <div 
        className="absolute inset-0"
        style={{ transform: 'translateZ(-200px) scale(3)' }}
      >
        <img 
          src="/images/layer 3.png" 
          alt="Layer 3"
          style={{ 
            display: 'block',
            position: 'absolute',
            bottom: 0,
            maxWidth: 'none',
            height: 'auto'
          }}
        />
      </div>
      
      <div 
        className="absolute inset-0"
        style={{ transform: 'translateZ(-150px) scale(2.5)' }}
      >
        <img 
          src="/images/layer 4.png" 
          alt="Layer 4"
          style={{ 
            display: 'block',
            position: 'absolute',
            bottom: 0,
            maxWidth: 'none',
            height: 'auto'
          }}
        />
      </div>
      
      <div 
        className="absolute inset-0"
        style={{ transform: 'translateZ(-100px) scale(2)' }}
      >
        <img 
          src="/images/layer 5.png" 
          alt="Layer 5"
          style={{ 
            display: 'block',
            position: 'absolute',
            bottom: 0,
            maxWidth: 'none',
            height: 'auto'
          }}
        />
      </div>
      
      {/* Foreground layer - closest */}
      <div 
        className="absolute inset-0"
        style={{ transform: 'translateZ(0) scale(1)' }}
      >
        <img 
          src="/images/layer 6.png" 
          alt="Foreground layer"
          style={{ 
            display: 'block',
            position: 'absolute',
            bottom: 0,
            maxWidth: 'none',
            height: 'auto'
          }}
        />
      </div>
      
      {/* Content overlay */}
      <div className="block absolute left-0 right-0 z-[2] bg-[#0a0a0a]" style={{ top: '100%', height: '500px' }}>
        <div className="container mx-auto px-4">
          {/* Add any content that should appear after the parallax effect */}
        </div>
      </div>
    </div>
  );
}
