import { Configuration, OpenAIApi } from 'openai';
import { ChangeEvent, useState } from 'react';

import styles from './Help.module.scss';

const Help = () => {
  const apiKey = process.env.OPENAI_KEY;
  const [response, setResponse] = useState<string | undefined>('');
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<
    {
      prompt: string;
      answer: string | undefined;
    }[]
  >([]);

  const onChange = (event: ChangeEvent) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const makeRequest = async (prompt: string) => {
    // dont make too many requests lol its paid (like .00008 per req but still)
    setLoading(true);
    setValue('');
    const openai = new OpenAIApi(new Configuration({ apiKey }));

    await openai
      .createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
      })
      .then((response) => {
        const answer = response.data.choices[0].message?.content;
        setResponse(answer);

        // Save the prompt and answer to history
        setHistory((prevHistory) => [
          ...prevHistory,
          { prompt: prompt, answer: answer },
        ]);
      })
      .then(() => setLoading(false));
  };

  return (
    <div className={styles.appContainer}>
      <div className={styles.historyContainer}>
        {history.map((item, index) => (
          <div key={index} className={styles.historyItem}>
            <div className={styles.prompt}>You: {item.prompt}</div>
            <div className={styles.answer}>ChatGPT: {item.answer}</div>
          </div>
        ))}
      </div>
      <div className={styles.responseBox}>
        {loading ? 'Loading...' : response}
      </div>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter your prompt"
          value={value}
          onChange={onChange}
        />
        <button className={styles.button} onClick={() => makeRequest(value)}>
          Send prompt
        </button>
      </div>
    </div>
  );
};

export default Help;
