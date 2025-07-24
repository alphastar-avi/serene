"use client"

import { useState } from "react"

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  fill?: boolean
  priority?: boolean
  width?: number
  height?: number
}

export default function OptimizedImage({
  src,
  alt,
  className = "",
  fill = false,
  priority = false,
  width,
  height,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  if (fill) {
    return (
      <div className={`relative ${className}`}>
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? "eager" : "lazy"}
        />
        {isLoading && (
          <div className="absolute inset-0 bg-sage/10 animate-pulse flex items-center justify-center">
            <div className="text-sage/60">Loading...</div>
          </div>
        )}
        {hasError && (
          <div className="absolute inset-0 bg-sage/10 flex items-center justify-center">
            <div className="text-sage/60">Image unavailable</div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={className} style={{ width, height }}>
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? "eager" : "lazy"}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-sage/10 animate-pulse flex items-center justify-center">
          <div className="text-sage/60">Loading...</div>
        </div>
      )}
      {hasError && (
        <div className="absolute inset-0 bg-sage/10 flex items-center justify-center">
          <div className="text-sage/60">Image unavailable</div>
        </div>
      )}
    </div>
  )
}
