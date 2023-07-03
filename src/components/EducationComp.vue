<template>
    
    <routerlink :to="{name:'school', params: {id: school.id} }" >
        <div id="education-page">
            <div class="timeline">
                <div class="container left">
                <div class="content">
                    <h2>{{ school.year }}</h2>
                    <p>{{ school.desc }}</p>
            
                </div>
            </div>
            </div>
        </div>
    </routerlink>
    <div>
        <button>Previous</button>
    </div>
</template>
<script>
export default {
  props: ["school"],
};
</script>