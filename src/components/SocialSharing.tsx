
import { Share2, Facebook, Twitter, Linkedin, Copy, Check, Instagram, MessageSquareQuote } from 'lucide-react';
import { useState } from 'react';
import { useLiveAgeMilestones } from './useLiveAgeMilestones';

// Use same birth date as card
const BIRTH_DATE = "1993-06-15T09:30:00Z";

// ADDED: Wishes From Your Bro THANGELLA at the very start
const mainWish = `Wishes From Your Bro THANGELLA

Habbeb Akka,

Some individuals go through life fulfilling responsibilities. Others, like you, leave a lasting mark — not by being loud, but by being consistent, composed, and deeply intentional ✨.

Your journey through HCL, Western Union, and now LTI Mindtree 🏢 is more than a professional timeline — it’s a story of quiet leadership 🤝, emotional intelligence 🧠, and relentless commitment 🔁. You’ve not only grown into an exceptional Analyst 📊, but have also become someone others look up to for stability and strength 💪.

What stands out most is your ability to lead without needing the spotlight 🔦. You bring structure to chaos 📐, clarity to complexity 🔍, and calm to challenge 🌿 — traits that are rare, powerful, and deeply admirable 🌟.

As you step into your 31st year 🕊️ and prepare to embrace motherhood 👶, I see not just a new beginning, but a powerful continuation of the grace and wisdom you’ve always carried.

You’re not simply building a life — you’re shaping a legacy 🏡 defined by intention, resilience, and quiet excellence 🌸.

This year, may you experience the kind of growth that’s rooted 🌱, the kind of joy that’s quiet but lasting 😊, and the kind of fulfillment that doesn’t need words 💫.

— With deep respect and admiration,  
THANGELLA`;

function formatNumber(num: number) {
  return num.toLocaleString();
}



const SocialSharing = () => {
  const [copied, setCopied] = useState(false);
  const age = useLiveAgeMilestones(BIRTH_DATE);

  // Calculate totals for Total Life Journey
  const birth = new Date(BIRTH_DATE);
  const now = new Date();
  const diffMs = now.getTime() - birth.getTime();
  const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const totalWeeks = Math.floor(totalDays / 7);
  const totalMonths = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 30.44));
  const totalHours = Math.floor(diffMs / (1000 * 60 * 60));
  const totalMinutes = Math.floor(diffMs / (1000 * 60));
  const totalSeconds = Math.floor(diffMs / 1000);

  // Nice multiline breakdown for sharing
  const totalLifeJourney = 
`Total Life Journey ✨
${formatNumber(totalMonths)} Total Months
${formatNumber(totalWeeks)} Total Weeks
${formatNumber(totalDays)} Total Days
${formatNumber(totalHours)} Total Hours
${formatNumber(totalMinutes)} Total Minutes
${formatNumber(totalSeconds)} Total Seconds`;

  // Final beautiful text to share (no Lovable/app links or references, no URLs, just the message and full milestone)
  const shareText = `${mainWish}

${totalLifeJourney}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const shareOnLinkedIn = () => {
    // LinkedIn sharing doesn't support plain text, but we can share the card text as summary
    const url = `https://www.linkedin.com/sharing/share-offsite/?summary=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const shareOnWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank');
  };

  const shareOnInstagram = () => {
    alert("Instagram doesn't fully support web sharing. Please copy the message and paste in your Instagram story or DM.");
    handleCopyLink();
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Birthday Wishes for Habbeb",
          text: shareText,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 mb-8">
      <div className="flex items-center space-x-2 mb-4">
        <Share2 className="w-5 h-5 text-pink-600" aria-hidden="true" />
        <h3 className="text-xl font-bold text-gray-800">Share the Celebration Card</h3>
      </div>
      <p className="text-gray-600 mb-4 text-sm">
        Share this heartfelt birthday card—including her complete Total Life Journey milestones—with friends and family!
      </p>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={shareOnFacebook}
          aria-label="Share on Facebook"
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors outline-none focus:ring-2 focus:ring-blue-300"
        >
          <Facebook className="w-4 h-4" aria-hidden="true" />
          <span>Facebook</span>
        </button>
        <button
          onClick={shareOnTwitter}
          aria-label="Share on Twitter"
          className="flex items-center space-x-2 bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors outline-none focus:ring-2 focus:ring-sky-300"
        >
          <Twitter className="w-4 h-4" aria-hidden="true" />
          <span>Twitter</span>
        </button>
        <button
          onClick={shareOnLinkedIn}
          aria-label="Share on LinkedIn"
          className="flex items-center space-x-2 bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors outline-none focus:ring-2 focus:ring-blue-500"
        >
          <Linkedin className="w-4 h-4" aria-hidden="true" />
          <span>LinkedIn</span>
        </button>
        <button
          onClick={shareOnWhatsApp}
          aria-label="Share on WhatsApp"
          className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors outline-none focus:ring-2 focus:ring-green-300"
        >
          <MessageSquareQuote className="w-4 h-4" aria-hidden="true" />
          <span>WhatsApp</span>
        </button>
        <button
          onClick={shareOnInstagram}
          aria-label="Share on Instagram"
          className="flex items-center space-x-2 bg-gradient-to-r from-pink-400 to-yellow-400 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform outline-none focus:ring-2 focus:ring-pink-200"
        >
          <Instagram className="w-4 h-4" aria-hidden="true" />
          <span>Instagram</span>
        </button>
        <button
          onClick={handleCopyLink}
          aria-label="Copy Card"
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all outline-none focus:ring-2 focus:ring-green-400 ${
            copied 
              ? 'bg-green-500 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {copied ? <Check className="w-4 h-4" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
          <span>{copied ? 'Copied!' : 'Copy Card'}</span>
        </button>
        {navigator.share && (
          <button
            onClick={handleNativeShare}
            aria-label="Share via Device"
            className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform outline-none focus:ring-2 focus:ring-pink-300"
          >
            <Share2 className="w-4 h-4" aria-hidden="true" />
            <span>Share</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default SocialSharing;

