import Vue from 'vue'

Vue.directive ('font', {
  mounted: (el,binding) => {
    el.style.fontSize = binding.value + 'px';

    if(binding.modifiers.bold) {
      el.style.fontWeight = 'bold';
    }

    if(binding.modifiers.orange) {
      el.style.color = 'orange';
    }
  
}
})