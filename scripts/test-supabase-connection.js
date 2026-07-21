import { createClient } from '@supabase/supabase-js';

// Use the same credentials as the app
const supabaseUrl = 'https://homvczgarnqunquczxuv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvbXZjemdhcm5xdW5xdWN6eHV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY4NDgxNzIsImV4cCI6MjA4MjQyNDE3Mn0.5D2S0tfq0LNTNbYA15bhps_kIu--AlCXoKlR7fn4ivc';

console.log('Testing Supabase connection...\n');
console.log('URL:', supabaseUrl);

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function testConnection() {
  try {
    // Test 1: Basic connection
    console.log('Test 1: Testing basic connection...');
    const { data: healthData, error: healthError } = await supabase.from('blogs').select('count', { count: 'exact', head: true });
    
    if (healthError) {
      console.log('❌ Connection test failed:', healthError.message);
      console.log('Error code:', healthError.code);
      
      if (healthError.message.includes('does not exist') || healthError.code === '42P01') {
        console.log('\n⚠️  The "blogs" table does not exist!');
        console.log('You need to create it in the Supabase SQL Editor.');
      }
    } else {
      console.log('✅ Connection successful!');
      console.log('Table exists and is accessible.\n');
    }

    // Test 2: Try to insert a test record
    console.log('Test 2: Testing insert operation...');
    const testRecord = {
      title: 'Connection Test',
      slug: 'connection-test-' + Date.now(),
      content: 'This is a test to verify the connection works',
      image: 'https://example.com/test.jpg',
      category: 'business',
      status: 'draft'
    };

    const { data: insertData, error: insertError } = await supabase
      .from('blogs')
      .insert([testRecord])
      .select();

    if (insertError) {
      console.log('❌ Insert test failed:', insertError.message);
      console.log('Error code:', insertError.code);
      
      if (insertError.code === '23505') {
        console.log('Note: Duplicate slug error is expected if re-running the test.');
      }
    } else {
      console.log('✅ Insert successful!');
      console.log('Inserted record ID:', insertData[0].id);
      
      // Clean up
      await supabase.from('blogs').delete().eq('id', insertData[0].id);
      console.log('✅ Test record cleaned up.\n');
    }

    // Test 3: Check table structure
    console.log('Test 3: Checking table structure...');
    const { data: schemaData, error: schemaError } = await supabase
      .from('blogs')
      .select('*')
      .limit(1);

    if (schemaError) {
      console.log('❌ Cannot read table structure:', schemaError.message);
    } else {
      console.log('✅ Table structure accessible');
      if (schemaData && schemaData.length > 0) {
        console.log('Columns found:', Object.keys(schemaData[0]).join(', '));
      } else {
        console.log('Table is empty but accessible.');
      }
    }

    console.log('\n========================================');
    console.log('Diagnostics complete!');
    console.log('========================================');
    
  } catch (err) {
    console.error('❌ Unexpected error:', err);
    console.log('\nThis is likely a network or configuration issue.');
    console.log('Check that:');
    console.log('1. Your internet connection is working');
    console.log('2. The Supabase project is active (not paused)');
    console.log('3. The Supabase URL and key are correct');
  }
}

testConnection();
