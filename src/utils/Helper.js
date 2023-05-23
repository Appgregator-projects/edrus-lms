export function formatFrice(value) {
    if (typeof value === 'number') {
      if (value < 1000) {
        let val = value.toFixed(2);
        if (val === '0.00') {
          val = '0';
        } else {
          val = parseFloat(val).toString();
        }
        return val.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      } else {
        return value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    } else {
      return '';
    }
  }
  
  export function formatCategoryName(category) {
    return category.split('-').map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  }
  
  export function readMore (val) {
    if(!val) return ''
    val = val.replace(/\s{2,}/g, ' ')
    const strLength = val.length
    if(strLength > 18) {{
      val = val.slice(0,18) + '...'}
  
    }
    return val.toLowerCase()
      .replace(/\w/, firstLetter => firstLetter.toUpperCase())
  }