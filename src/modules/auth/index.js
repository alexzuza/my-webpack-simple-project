import style from './auth.css';

export default function() {
  console.info('hi from auth');
  
  var block = document.createElement('div');
  block.className = 'auth';

  return block;
}

