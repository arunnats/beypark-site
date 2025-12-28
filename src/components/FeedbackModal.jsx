"use client";

import { useState } from 'react';
import { useUserStats } from '../helpers/useUserStats';

export default function FeedbackModal({ isOpen, onClose }) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);
  
  const { submitFeedback } = useUserStats();

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleStarHover = (value) => {
    setHoverRating(value);
  };

  const handleStarLeave = () => {
    setHoverRating(0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (rating === 0) {
      setSubmitMessage({ type: 'error', text: 'Please select a rating.' });
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      // Submit the rating as a number (e.g., 4.5, 3.0, 2.5, etc.)
      await submitFeedback(rating, feedback);
      
      setSubmitMessage({ 
        type: 'success', 
        text: 'Thank you for your feedback!' 
      });
      
      setTimeout(() => {
        setRating(0);
        setFeedback('');
        setSubmitMessage(null);
        onClose();
      }, 2000);
      
    } catch (error) {
      const errorMessage = error.message.includes('permission_denied') 
        ? 'Please wait 1 minute before submitting again.' 
        : 'Failed to submit feedback. Please try again.';

      setSubmitMessage({ 
        type: 'error', 
        text: errorMessage 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div 
          className="bg-white rounded-xl w-full max-w-md shadow-2xl transform transition-all duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Share Your Feedback</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <p className="text-gray-600 mt-2">Help us improve BeyPark</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6">
            {/* Star Rating with Half Stars */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-3">
                How would you rate your experience?
              </label>
              <div className="flex gap-0.5 justify-center">
                {[1, 2, 3, 4, 5].map((star) => {
                  const fullValue = star;
                  const halfValue = star - 0.5;
                  
                  return (
                    <div key={star} className="relative w-10 h-10 group">
                      {/* Left half (for half-star selection) */}
                      <button
                        type="button"
                        onClick={() => handleStarClick(halfValue)}
                        onMouseEnter={() => handleStarHover(halfValue)}
                        onMouseLeave={handleStarLeave}
                        className="absolute left-0 top-0 w-1/2 h-full z-10 overflow-hidden opacity-0 hover:opacity-100"
                        aria-label={`${halfValue} stars`}
                      >
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-5 h-full bg-transparent"></div>
                        </div>
                      </button>
                      
                      {/* Right half (for full-star selection) */}
                      <button
                        type="button"
                        onClick={() => handleStarClick(fullValue)}
                        onMouseEnter={() => handleStarHover(fullValue)}
                        onMouseLeave={handleStarLeave}
                        className="absolute right-0 top-0 w-1/2 h-full z-10"
                        aria-label={`${fullValue} stars`}
                      >
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-5 h-full bg-transparent"></div>
                        </div>
                      </button>
                      
                      {/* Visual star display */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          className={`w-10 h-10 transition-colors duration-150 ${
                            (hoverRating || rating) >= fullValue
                              ? 'text-yellow-500'
                              : (hoverRating || rating) >= halfValue
                              ? 'text-yellow-500'
                              : 'text-gray-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {/* Conditionally show half-filled star using gradient */}
                          {(hoverRating || rating) >= halfValue && (hoverRating || rating) < fullValue ? (
                            <>
                              <defs>
                                <linearGradient id={`half-fill-${star}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                  <stop offset="50%" stopColor="currentColor" />
                                  <stop offset="50%" stopColor="#D1D5DB" />
                                </linearGradient>
                              </defs>
                              <path fill={`url(#half-fill-${star})`} d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </>
                          ) : (
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          )}
                        </svg>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-between items-center mt-3">
                <span className="text-sm text-gray-500">Poor</span>
                <div className="text-sm font-medium text-gray-700">
                  {rating === 0 ? 'Select rating' : `${rating} star${rating === 1 ? '' : 's'}`}
                </div>
                <span className="text-sm text-gray-500">Excellent</span>
              </div>
            </div>

            {/* Feedback Textarea */}
            <div className="mb-6">
              <label htmlFor="feedback" className="block text-gray-700 font-medium mb-2">
                Suggestions for Improvement
                <span className="text-gray-500 font-normal text-sm ml-1">(max 300 characters)</span>
              </label>
              <textarea
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                maxLength={300}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
                placeholder="What can we do better? Your suggestions help us improve..."
              />
              <div className="text-right text-sm text-gray-500 mt-1">
                {feedback.length}/300 characters
              </div>
            </div>

            {/* Submit Message */}
            {submitMessage && (
              <div className={`mb-4 p-3 rounded-lg ${
                submitMessage.type === 'success' 
                  ? 'bg-green-50 text-green-800 border border-green-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {submitMessage.text}
              </div>
            )}

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-6 py-3 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : 'Submit Feedback'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}