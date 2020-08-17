<template>
	<div class="home flex-wrap">
		
		<div class="content">
			<div class="left">
				<EveryDay />
				<Bolg />
			</div>
			<div class="right">
				<Tags />
				<HotBlogs />
				<NewComments />
				<Links />
			</div>
		</div>

	</div>
</template>

<script>
	import Bolg from '@/components/home/Bolg.vue';
	import EveryDay from '@/components/home/EveryDay.vue';
	import HotBlogs from '@/components/home/HotBlogs.vue';
	import Links from '@/components/home/Links.vue';
	import NewComments from '@/components/home/NewComments.vue';
	import Tags from '@/components/home/Tags.vue';
	export default {
		name: 'Home',
		beforeRouteEnter(to, from, next){
			if (to.query.to == 'edit') {
				next({name: 'Edit'})
			} else {
				next();
			}
		},
		components: {
			Bolg,
			EveryDay,
			HotBlogs,
			Links,
			NewComments,
			Tags
		}
	}
</script>

