import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://siamrffcnkniuijxfemj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpYW1yZmZjbmtuaXVpanhmZW1qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUzNDA4NzMsImV4cCI6MjA3MDkxNjg3M30.8IcC_B37AE8kc8bWuHg-tKU1VZdIf0RorBOGMVkz39Q';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// AI Tutor function integration
export const callAITutor = async (message: string, conversationHistory: Array<{role: 'user' | 'assistant', content: string}> = []) => {
  try {
    // Use direct fetch instead of supabase.functions.invoke for better reliability
    const response = await fetch(`${supabaseUrl}/functions/v1/ai-tutor-chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${supabaseAnonKey}`,
        'apikey': supabaseAnonKey
      },
      body: JSON.stringify({
        message,
        conversationHistory
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI Tutor HTTP error:', response.status, errorText);
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }

    const result = await response.json();
    return result?.data;
  } catch (error) {
    console.error('Failed to call AI Tutor:', error);
    throw error;
  }
};