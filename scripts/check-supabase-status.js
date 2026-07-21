// Simple connectivity test without Supabase client
console.log('Checking Supabase connectivity...\n');

const supabaseUrl = 'https://homvczgarnqunquczxuv.supabase.co';

async function checkConnectivity() {
  try {
    console.log('Test 1: Basic HTTP connectivity test...');
    
    // Test basic connectivity to Supabase URL
    const response = await fetch(supabaseUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      }
    });
    
    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));
    
    if (response.ok) {
      console.log('✅ Basic connectivity successful');
    } else {
      console.log('❌ Basic connectivity failed');
    }
    
    // Test REST API endpoint
    console.log('\nTest 2: Testing REST API endpoint...');
    
    const restResponse = await fetch(`${supabaseUrl}/rest/v1/`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvbXZjemdhcm5xdW5xdWN6eHV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY4NDgxNzIsImV4cCI6MjA4MjQyNDE3Mn0.5D2S0tfq0LNTNbYA15bhps_kIu--AlCXoKlR7fn4ivc',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvbXZjemdhcm5xdW5xdWN6eHV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY4NDgxNzIsImV4cCI6MjA4MjQyNDE3Mn0.5D2S0tfq0LNTNbYA15bhps_kIu--AlCXoKlR7fn4ivc'
      }
    });
    
    console.log('REST API status:', restResponse.status);
    
    if (restResponse.ok) {
      console.log('✅ REST API accessible');
    } else {
      console.log('❌ REST API failed');
      const errorText = await restResponse.text();
      console.log('Error response:', errorText);
    }
    
    // Test specific table access
    console.log('\nTest 3: Testing table access...');
    
    const tableResponse = await fetch(`${supabaseUrl}/rest/v1/blog_posts?select=count`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvbXZjemdhcm5xdW5xdWN6eHV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY4NDgxNzIsImV4cCI6MjA4MjQyNDE3Mn0.5D2S0tfq0LNTNbYA15bhps_kIu--AlCXoKlR7fn4ivc',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvbXZjemdhcm5xdW5xdWN6eHV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY4NDgxNzIsImV4cCI6MjA4MjQyNDE3Mn0.5D2S0tfq0LNTNbYA15bhps_kIu--AlCXoKlR7fn4ivc',
        'Prefer': 'count=exact'
      }
    });
    
    console.log('Table access status:', tableResponse.status);
    
    if (tableResponse.ok) {
      console.log('✅ Table accessible');
      const count = tableResponse.headers.get('content-range');
      console.log('Content-Range:', count);
    } else {
      console.log('❌ Table access failed');
      const errorText = await tableResponse.text();
      console.log('Error response:', errorText);
    }
    
  } catch (error) {
    console.error('❌ Network error:', error.message);
    console.log('\nPossible causes:');
    console.log('1. No internet connection');
    console.log('2. DNS resolution failure');
    console.log('3. Firewall blocking the request');
    console.log('4. Supabase project is paused or deleted');
    console.log('5. Invalid URL or credentials');
  }
}

checkConnectivity();
