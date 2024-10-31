# Text Analytics Web Application

This single-page web application provides text analytics functionalities, including:

- **Entity Extraction**: Identifying key entities in a text, such as places, personalities, brands, etc.
- **Text Similarity**: Calculating the semantic similarity between two texts.
- **Language Detection**: Identifying the language of a given text.
- **Sentiment Analysis**: Analyzing the sentiment of a text as positive, neutral, or negative.

## Features

### Entity Extraction

On the **Entity Extraction** page, users can input text and use the following optional parameters:
- **min_confidence**: A slider to set the confidence threshold for entity extraction (range: 0 to 1).
- **include**: Checkboxes to include additional fields in the results (image, abstract, categories). Selected options will display additional information for each extracted entity.

### Text Similarity

The **Text Similarity** page allows users to input two texts to compare their semantic similarity. The result shows a score reflecting how similar the two texts are.

### Language Detection

On the **Language Detection** page, users can input a text to detect its language. There is an optional checkbox to "clean" the text by removing links, emails, and hashtags before processing.

### Sentiment Analysis

The **Sentiment Analysis** page analyzes the sentiment of a given text. Users can select the language of the text (English, Italian, or auto for automatic detection). The sentiment score ranges from -1 (negative) to 1 (positive) and is color-coded (red for negative, green for positive, and brown for neutral).

### History Tracking

The application logs every API request made to Dandelion during the session. The history is displayed in a structured format, showing the time of each request and its parameters. The log is reset after refreshing the page.

## Usage

- Register on Dandelion and obtain an API token.
- Open the application and navigate to the Configuration page to set your API token.
- Use the navigation menu to access the tools (Entity Extraction, Text Similarity, Language Detection, Sentiment Analysis).
- Input your text and parameters, then submit to get the analysis results from the Dandelion API.
- The History page will log all API requests made during your session.

## Technical Requirements

- This application is built with the Angular framework.
- It uses the `Dandelion API` for text analytics services.
- The token for API access is saved at the browser level, allowing it to persist across sessions.
- Page access is restricted until a valid API token is set.
