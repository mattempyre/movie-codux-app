import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';

export default createBoard({
    name: 'Card',
    Board: () => (
        <Card
            movie={{
                id: '123',
                overview:
                    'this is dummy text to test  how the description will look for each movie card',
                release_date: '2000',
                title: 'Avatar 7',
                vote_average: 7,
                poster_path: 'https://m.media-amazon.com/images/I/41kTVLeW1CL._AC_.jpg',
            }}
        />
    ),
});
