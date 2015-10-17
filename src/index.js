import React, { PropTypes } from 'react';
import ReactROM from 'react-dom';
import './styles.css';

const Skill = props => {
	return (
	  	<a data-tooltip={props.skill}>
	  		<img className='skill-icon' src={`./res/${props.skill}.png`}/>
	  	</a>
	);
}

const Career = props => {
	const { career } = props;
	const skillViews = career.skills.map((skill, index) => (
		<Skill key={index} skill={skill}/>
	));

	return (
		<div className='horizontalVerCenter ho-content'>
			<a href={career.website} target='_blank'>
				<img className='company-banner' src={`./res/${career.company}.png`}/>
			</a>
			<div className='ho-content'>
				<h4>{career.title}</h4>
				<p>Position: {`${career.position} (${career.duration})`}</p>
				{career.detail}
				<div className='horizontalVerCenter'>
					<span>Working on:</span>
					{skillViews}
				</div>
			</div>
		</div>
	);
}

const HomePage = props => {
	const careers = [
		{
			company: 'Wondershare',
			website: 'http://www.wondershare.com/',
			location: 'Shenzhen, China',
			title: 'Wondershare Software',
			position: 'Mobile Engineer',
			duration: '2010',
			detail: <p>In 2010 I graduated from <a href='http://www.csc.edu.cn/studyinchina/universityabouten.aspx?collegeId=310' target='_blank'>Xi'an University of Posts and Telecommunications</a> with bachelor of engineering and
					start my career at Wondershare. during that time, as member of a small android developer team, we developed and released three apps to the former Android Market,
					one world timer, one simple audio player and one <a href='http://bbs.gfan.com/android-698614-1-1.html' target='_blank'>social app</a> based
					on <a href='https://en.wikipedia.org/wiki/Sina_Weibo' target='_blank'>Sina Weibo</a> public APIs.
					</p>,
			skills: ['Android']
		}, {
			company: 'Baidu',
			website: 'http://www.baidu.com/',
			location: 'Shenzhen, China',
			title: 'Baidu',
			position: 'Senior Mobile Engineer',
			duration: '2011 ~ 2013',
			detail: (
				<div>
					<p>
						For the sake of improve my development skill, in 2011 I joined Baidu, the biggest search engine company in China.
						Baidu is the palce with rich engineering and technique driven culture, where I can focus all my energy
						on technique, be able to working with passionate colleagues, solving
						tough problems and push code quality to the limit.
					</p>
					<p>
						During the time in Baidu, I mainlly developed two Android apps, Baidu Email and Baidu VOIP, which are part of
						our <a href='http://www.romzj.com/zone/4.htm' target='_blank'>Baidu Yi Cloud Operating System</a> (
						<a href='https://en.wikipedia.org/wiki/Baidu_Yi' target='_blank'>derived from Android Source Code</a>), by the
						time I left the company, I'm the domain owner of Email and VOIP on the Yi platform.
					</p>
					<p>Besides the apps development work, I also woring on Android framework layer. add our own feature to Android
						open source project, writting JS test script etc.
					</p>
				</div>
			),
			skills: ['Android', 'AndroidSource', 'Javascript', 'HTML', 'CSS']
		}, {
			company: 'Alibaba',
			website: 'http://www.alibaba.com/',
			location: 'Singapore',
			title: 'Alibaba',
			position: 'Senior Mobile Engineer',
			duration: '2014 ~ Now',
			detail: <div>
						<p>In 2014 My wife and I moved to Singapore and started our new life in this beautiful tiny country.
							I joined Alibaba Singapore to continue my developer career.
						</p>
						<p>
							As a member of Alipay department, my main job is working on the Android version of our <a href='https://play.google.com/store/apps/details?id=com.eg.android.AlipayGphone&hl=en' target='_blank'>Alipay Mobile Wallet</a>.
							Adding new features, solving bugs, improving performance and user experience etc.
						</p>
						<p>
							One of the greatest things of working in Alibaba is you can try everything you want if its
							good for the team. So as a technique geek which I hope I can be, I tried a lots of in company project with
							technique including React, React Native, Angular, Polymer, Node, Loopback, etc. One of the project is a <a href='http://granny.io' target='_blank'>mobile automation test platform</a> which
							I built using WebDriver, Appium, React, Redux, Bootstrap, Loopback and MongoDB.
						</p>
					</div>,
			skills: ['Android', 'React', 'NodeJs', 'Strongloop', 'MongoDB', 'AngularJs', 'GCP', 'AWS']
		}
	];

	const careerViews = careers.map((career, index) => (
		<Career key={index} career={career}/>
	));

	return (
		<div>
			<div className='horizontalCenter ho-banner' style={{background: 'url(./res/singapore.jpg) no-repeat center center', backgroundSize: 'cover'}}>
				
			</div>
			<div className='row ho-content'>
				<div className='col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2'>
					{careerViews}
				</div>
			</div>
			<br/><br/><br/><br/><br/><br/>
			<div className='row ho-content ho-footer' style={{background: '#37474F', color: '#fff'}}>
				<div className='col-sm-4 col-sm-offset-2 col-md-3 col-md-offset-3 ho-content horizontalCenter'>
					<img className='img-circle ho-avatar' src='./res/ruiqi.png'/>
				</div>
				<div className='col-sm-4 col-md-3 ho-content horizontalCenter'>
					<div>
						<p>Ruiqi Li</p>
						<p>Contact: ruiqi.sg@gmail.com</p>
					</div>
				</div>
			</div>
		</div>
	);
};

ReactROM.render(<HomePage/>, document.getElementById('root'));