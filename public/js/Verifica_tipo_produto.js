function verificaTipoProduto(value) {
    if (value === 'pizza') {
      document.getElementById('produto_transfomacao').value = 'true';
    } else {
      document.getElementById('produto_transfomacao').value = 'false';
    }
  }