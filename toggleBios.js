function toggleBio(bioId) {
  const bio = document.getElementById(bioId);
  if (bio) {
    bio.classList.toggle('hidden');
  }
}
