'use client'

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { 
  FaceSmileIcon, 
  HeartIcon,
  HandThumbUpIcon,
  ChatBubbleLeftIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { useState } from 'react'

const feedbackOptions = [
  { 
    emoji: '😊', 
    label: 'Great Experience',
    color: 'from-emerald-400 to-teal-500',
    hoverColor: 'hover:shadow-emerald-500/50'
  },
  { 
    emoji: '😐', 
    label: 'It was Okay',
    color: 'from-amber-400 to-orange-500',
    hoverColor: 'hover:shadow-amber-500/50'
  },
  { 
    emoji: '😕', 
    label: 'Needs Improvement',
    color: 'from-red-400 to-rose-500',
    hoverColor: 'hover:shadow-red-500/50'
  },
]

const FeedbackModal = () => {
  const [selectedFeedback, setSelectedFeedback] = useState<number | null>(null)
  const [comment, setComment] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (selectedFeedback !== null) {
      // Here you would send the feedback to your backend
      console.log('Feedback submitted:', {
        rating: selectedFeedback,
        comment: comment
      })
      setSubmitted(true)
      
      // Reset after 3 seconds
      setTimeout(() => {
        setSubmitted(false)
        setSelectedFeedback(null)
        setComment('')
      }, 3000)
    }
  }

  return (
    <div className="relative hidden lg:block">
      <div className="fixed bottom-8 right-8 z-40 flex items-center">
        <Popover className="relative">
          {({ open, close }) => (
            <>
              <PopoverButton
                className={`group relative rounded-full bg-white/20 backdrop-blur-md border border-white/30 p-4 shadow-2xl transition-all duration-500 hover:scale-110 hover:shadow-white/50 focus:outline-hidden ${
                  open ? 'scale-110 shadow-white/60 bg-white/30' : 'hover:rotate-12'
                }`}
              >
                <FaceSmileIcon className="h-8 w-8 text-red-600 transition-transform duration-300 group-hover:scale-110" />
                
                {/* Animated pulse ring */}
                <span className="absolute inset-0 rounded-full bg-white/40 opacity-75 animate-ping"></span>
                
                {/* Tooltip */}
                <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-white/90 backdrop-blur-md border border-white/30 px-3 py-1.5 text-sm font-medium text-red-600 opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                  Share Your Feedback
                </span>
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute bottom-full right-0 mb-4 w-96 transform overflow-hidden rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl transition data-closed:translate-y-4 data-closed:opacity-0 data-closed:scale-95"
              >
                {!submitted ? (
                  <div className="relative">
                    {/* Header with gradient */}
                    <div className="bg-white/30 backdrop-blur-md border-b border-white/30 px-6 py-8">
                      <button
                        onClick={() => close()}
                        className="absolute top-4 right-4 rounded-full p-1 transition-colors hover:bg-white/30 text-red-600"
                      >
                        <XMarkIcon className="h-5 w-5" />
                      </button>
                      
                      <div className="flex items-center gap-3">
                        <HeartIcon className="h-8 w-8 text-red-600 animate-pulse" />
                        <div>
                          <h3 className="text-2xl font-bold text-red-600">We'd Love Your Feedback!</h3>
                          <p className="mt-1 text-sm text-neutral-700">Help us improve your experience</p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Emoji Selection */}
                      <div className="mb-6">
                        <label className="mb-3 block text-sm font-semibold text-neutral-800">
                          How was your experience?
                        </label>
                        <div className="flex gap-3">
                          {feedbackOptions.map((option, index) => (
                            <button
                              key={index}
                              onClick={() => setSelectedFeedback(index)}
                              className={`group relative flex-1 overflow-hidden rounded-2xl border-2 p-4 transition-all duration-300 ${
                                selectedFeedback === index
                                  ? `border-transparent bg-gradient-to-br ${option.color} shadow-lg ${option.hoverColor} scale-105`
                                  : 'border-white/40 bg-white/30 backdrop-blur-sm hover:border-white/60 hover:bg-white/40 hover:shadow-md'
                              }`}
                            >
                              <div className="text-center">
                                <div className={`text-4xl transition-transform duration-300 ${
                                  selectedFeedback === index ? 'scale-125' : 'group-hover:scale-110'
                                }`}>
                                  {option.emoji}
                                </div>
                                <div className={`mt-2 text-xs font-medium transition-colors ${
                                  selectedFeedback === index 
                                    ? 'text-white' 
                                    : 'text-neutral-700'
                                }`}>
                                  {option.label}
                                </div>
                              </div>
                              
                              {/* Selected indicator */}
                              {selectedFeedback === index && (
                                <div className="absolute top-2 right-2">
                                  <HandThumbUpIcon className="h-4 w-4 text-white animate-bounce" />
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Comment Section */}
                      <div className="mb-6">
                        <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-neutral-800">
                          <ChatBubbleLeftIcon className="h-4 w-4 text-red-600" />
                          Additional Comments (Optional)
                        </label>
                        <textarea
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          placeholder="Tell us more about your experience..."
                          rows={4}
                          className="w-full rounded-xl border border-white/40 bg-white/30 backdrop-blur-sm px-4 py-3 text-sm text-neutral-900 placeholder-neutral-600 transition-all focus:border-red-500 focus:outline-hidden focus:ring-2 focus:ring-red-500/20 focus:bg-white/40"
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        onClick={handleSubmit}
                        disabled={selectedFeedback === null}
                        className={`group relative w-full overflow-hidden rounded-xl px-6 py-3.5 font-bold shadow-lg transition-all duration-300 ${
                          selectedFeedback !== null
                            ? 'bg-gradient-to-r from-red-600 via-red-700 to-rose-700 text-white hover:shadow-xl hover:shadow-red-500/50 hover:scale-[1.02] hover:from-red-700 hover:via-red-800 hover:to-rose-800 active:scale-[0.98]'
                            : 'cursor-not-allowed bg-white/30 backdrop-blur-sm border border-white/40 text-neutral-800'
                        }`}
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          <HeartIcon className="h-5 w-5" />
                          Submit Feedback
                        </span>
                      </button>

                      {/* Footer text */}
                      <p className="mt-4 text-center text-xs text-neutral-600">
                        Your feedback helps us serve you better ✨
                      </p>
                    </div>
                  </div>
                ) : (
                  // Success State
                  <div className="p-8 text-center bg-white/10 backdrop-blur-sm">
                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 animate-bounce">
                      <HeartIcon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-red-600">
                      Thank You! 🎉
                    </h3>
                    <p className="text-sm text-neutral-700">
                      Your feedback has been received and helps us improve.
                    </p>
                  </div>
                )}
              </PopoverPanel>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default FeedbackModal