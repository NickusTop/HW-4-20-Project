export function visibleMenu(mainDiv, postOverlayDiv, addpostDiv, delpostDiv, editpostDiv, addPostBtn, editPostBtn, deletePostBtn, backPostBtn) {
  mainDiv.style.display = 'none';
  postOverlayDiv.style.display = 'flex';
  addpostDiv.style.display = 'flex';
  delpostDiv.style.display = 'none';
  editpostDiv.style.display = 'none';
  addPostBtn.style.display = 'none';
  editPostBtn.style.display = 'none';
  deletePostBtn.style.display = 'none';
  backPostBtn.style.display = 'flex';
}

export function visibleMenuDel(mainDiv, postOverlayDiv, addpostDiv, delpostDiv, editpostDiv, addPostBtn, editPostBtn, deletePostBtn, backPostBtn) {
  mainDiv.style.display = 'none';
  postOverlayDiv.style.display = 'flex';
  delpostDiv.style.display = 'flex';
  addpostDiv.style.display = 'none';
  editpostDiv.style.display = 'none';
  addPostBtn.style.display = 'none';
  editPostBtn.style.display = 'none';
  deletePostBtn.style.display = 'none';
  backPostBtn.style.display = 'flex';
}

export function visibleMenuEdit(mainDiv, postOverlayDiv, addpostDiv, delpostDiv, editpostDiv, addPostBtn, editPostBtn, deletePostBtn, backPostBtn) {
  mainDiv.style.display = 'none';
  postOverlayDiv.style.display = 'flex';
  editpostDiv.style.display = 'flex';
  addpostDiv.style.display = 'none';
  delpostDiv.style.display = 'none';
  addPostBtn.style.display = 'none';
  editPostBtn.style.display = 'none';
  deletePostBtn.style.display = 'none';
  backPostBtn.style.display = 'flex';
}
