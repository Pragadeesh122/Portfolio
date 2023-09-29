import supabase from './supabase';

export async function getUsers({ user }) {
  const { data, error } = await supabase.from('Users').insert([user]).select();

  if (error) {
    console.log(error);
    console.log('sd');
    throw new Error('There was an error getting the input!');
  }

  return data;
}
