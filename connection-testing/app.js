const store = observable({
	rows: [
		{
			name: 'tyle server',
			domain: 'https://tyle.io',
			endpoint: 'https://tyle.io/tyle/sdk-info',
			status: '',
			type: 'html'
		},
		{
			name: 'aws s3',
			domain: 'https://s3.ap-northeast-2.amazonaws.com',
			endpoint: 'https://s3.ap-northeast-2.amazonaws.com/tyle.io.seoul/cards.exports/ld/ldz5d5ejp6xix0/tyle-ldz-1.png',
			status: '',
			type: 'image'
		},
		{
			name: 'aws couldfront',
			domain: 'https://d1s0awd0642fry.cloudfront.net',
			endpoint: 'https://d1s0awd0642fry.cloudfront.net/web/libs/bootstrap.min.css',
			status: '',
			type: 'css'
		},
		{
			name: 'google font',
			domain: 'https://fonts.googleapis.com',
			endpoint: 'https://fonts.googleapis.com/css?family=Raleway:100,600',
			status: '',
			type: 'css'
		},
		{
			name: 'js polyfill',
			domain: 'https://cdn.polyfill.io',
			endpoint: 'https://cdn.polyfill.io/v2/polyfill.min.js',
			status: '',
			type: 'js'
		},
		{
			name: 'gettys image',
			domain: 'https://imagescdn.gettyimagesbank.com',
			endpoint: 'https://imagescdn.gettyimagesbank.com/171/07/190/990/0/78491790.jpg',
			status: '',
			type: 'image'
		},
		{
			name: 'pexel image',
			domain: 'https://images.pexels.com',
			endpoint: 'https://images.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg',
			status: '',
			type: 'image'
		},
		{
			name: 'pexel video thumbnail',
			domain: 'https://static-videos.pexels.com',
			endpoint: 'https://static-videos.pexels.com/videos/855018/pictures/preview-0.jpg',
			status: '',
			type: 'image'
		},
		{
			name: 'pixabay image cdn',
			domain: 'https://cdn.pixabay.com',
			endpoint: 'https://cdn.pixabay.com/photo/2018/07/25/06/09/butterfly-3560752_150.jpg',
			status: '',
			type: 'image'
		},
		{
			name: 'pixabay image',
			domain: 'https://pixabay.com',
			endpoint: 'https://pixabay.com/get/ea30b40920f4013ed1584d05fb1d4091e170e6d419ac104496f2c87aa5edbcb8_960.jpg',
			status: '',
			type: 'image'
		},
		// { // 지금 원래 안 되어서 잠시 막음
		// 	name: 'pixabay video',
		// 	domain: 'https://player.vimeo.com',
		// 	endpoint: 'https://player.vimeo.com/external/247710869.hd.mp4?s=51df6ccd15c16a772d4106313c39f0f1bfb11d5c&profile_id=172',
		// 	status: '',
		// type: 'image'
		// },
		{
			name: 'pixabay video thumbnail',
			domain: 'https://i.vimeocdn.com',
			endpoint: 'https://i.vimeocdn.com/video/715703799_340.jpg',
			status: '',
			type: 'image'
		}
	]
});

const resultStatus = (index, newStatus) => {
	store.rows[index].status = newStatus;
};

const Row = observer(
	class Row extends Component {
		componentDidMount() {
			const {
				index,
				row
			} = this.props;
			const {
				endpoint,
				type,
			} = row;
			if (type === 'image') {
		        const beacon = new Image();
		        beacon.onerror = () => {
		        	resultStatus(index, 'fail')	;
		        };
		        beacon.onload  = () => {
		        	resultStatus(index, 'done')	;
		        };
	            // Attach the src for the script call
		        beacon.src = `${endpoint}?_=${(+new Date())}`;
			} else {
				const opts = {
					url: endpoint,
					cache: false,
					crossDomain: true,
					complete: (xhr, textStatus) => {
						resultStatus(index, xhr.status == 200 ? 'done' : 'fail');
					},
					error: () => {
						resultStatus(index, 'fail');
					}
				};
				$.ajax(opts);
			}
		}

		render() {
			const {
				name,
				domain,
				endpoint,
				status
			} = this.props.row;
			return (
				<tr>
					<td>{domain}</td>
					<td className="text-center">
						{status === '' && <img src="ajax-loader.gif" />}
						{status !== '' && <span className={`label label-${status === 'done' ? 'success' : 'danger'}`}>{status}</span>}
					</td>
				</tr>
			);
		}
	}
);

class App extends Component {
	constructor(props){
		super(props);
	}

	render() {
		const {
			rows
		} = store;
		return (
			<div>
				<h1>
					Connection Testing
				</h1>
				<div id="wrapper">
					<table className="table table-bordered">
						<thead>
							<tr>
								<th>Domain</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							{rows.map((row, i) => {
								return <Row key={i} index={i} row={row} />
							})}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
ReactDOM.render(<App />, document.getElementById('root'));
