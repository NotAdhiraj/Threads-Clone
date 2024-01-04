import React from "react";

const RightSidebar = () => {
	return (
		<section className='custom-scrollbar rightsidebar'>
			<div className='flex flex-1 flex-col justify-start'>
				<h3 className='text-heading4-medium text-light-1'>
					Suggested Communities
				</h3>
				<p className='text-light-3 mt-5'>Coming Soon!</p>
			</div>
			<div className='flex flex-1 flex-col justify-start'>
				<h3 className='text-heading4-medium text-light-1'>Suggested Users</h3>
				<p className='text-light-3 mt-5'>Coming Soon!</p>
			</div>
		</section>
	);
};

export default RightSidebar;
