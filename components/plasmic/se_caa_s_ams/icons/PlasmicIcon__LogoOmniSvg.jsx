// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function LogoOmniSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 135.43 135.37"}
      xmlSpace={"preserve"}
      height={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M64.387 135.2c-1.164-.093-2.355-.263-2.646-.378-2.55-1.01-5.85-2.972-9.027-5.367-3.524-2.656-7.774-7.58-13.544-15.693a676.07 676.07 0 00-6.115-8.466c-6.451-8.697-13.8-13.23-21.454-13.23-2.01 0-5.142.555-6.135 1.086-.386.207-.54.129-.779-.397-.468-1.028-.125-1.41 1.808-2.016 1.443-.453 2.482-.566 5.24-.572 3.131-.007 3.664.066 5.953.808 3.213 1.041 6.242 2.593 8.648 4.432 2.29 1.75 6.185 5.773 8.116 8.384 2.203 2.978 4.415 6.06 5.858 8.159 7.056 10.269 13.353 16.695 19.315 19.714 3.541 1.793 7.984 3.234 10.186 3.303l1.19.037-1.454.201c-1.662.23-2.225.23-5.16-.005zm-14.155-2.051c-1.323-.378-1.773-.738-4.962-3.968-3.203-3.244-6.386-7.193-10.307-12.79-8.882-12.676-11.726-15.619-17.516-18.128-3.413-1.479-5.168-1.613-9.833-.749-.547.102-.747-.017-1.012-.6-.443-.972-.01-1.273 2.434-1.685 5.713-.964 12.07 1.517 17.263 6.737 2.174 2.185 4.827 5.528 8.31 10.474 1.076 1.528 2.263 3.194 2.638 3.704s1.276 1.776 2.004 2.815c3.505 5.006 8.329 10.353 11.448 12.692 1.125.845 2.16 1.63 2.298 1.745.41.343-1.2.199-2.765-.247zm36.777-1.09c2.404-1.231 3.99-2.34 6.145-4.295 3.65-3.311 5.869-6.767 7.385-11.498.823-2.566.845-2.761.84-7.398-.007-4.517-.048-4.899-.8-7.408-1.028-3.428-2.16-6.114-3.682-8.737-2.824-4.866-3.712-7.49-3.446-10.18.228-2.315.631-3.305 1.937-4.757 1.519-1.69 3.084-2.499 5.674-2.934 1.73-.29 2.308-.278 4.14.09 3.726.747 5.308 1.702 9.06 5.47 3.022 3.035 4.718 5.176 9.052 11.428.54.78 1.772 2.528 2.736 3.886 1.764 2.484 1.895 2.924 1.194 4.004-.354.545-.913-.01-2.831-2.811-1.665-2.43-2.977-4.332-4.837-7.008-3.512-5.056-7.372-9.396-9.77-10.988-5.21-3.457-12.027-2.736-13.847 1.466-1.06 2.448-.615 5.246 1.44 9.033 3.484 6.42 4.215 8.114 5.371 12.435.658 2.458.745 3.251.76 6.88.014 3.534-.072 4.43-.623 6.482-1.367 5.096-3.496 8.979-6.966 12.708-1.967 2.113-2.71 2.537-6.906 3.94-3.4 1.138-3.975 1.193-2.026.194zm-16.572-.037c-.893-.126-2.232-.41-2.977-.631-.744-.221-1.353-.355-1.353-.298 0 .169-2.43-.827-4.755-1.948-3.242-1.564-7.494-4.879-10.399-8.107-1.726-1.917-5.558-6.89-7.733-10.035-2.884-4.169-5.8-8.223-7.256-10.088-3.055-3.913-7.293-7.806-10.613-9.749-1.354-.792-4.46-2.275-4.767-2.275-.114 0-.782-.248-1.485-.55-1.643-.708-5-1.301-7.364-1.301-2.197 0-5.735.583-7.169 1.183-.955.399-1.045.397-1.359-.032-.532-.728-.398-1.406.333-1.684 4.06-1.544 10.198-1.827 14.292-.658 7.281 2.077 12.848 5.75 18.092 11.936 2.452 2.891 4.322 5.398 7.578 10.157 8.977 13.117 14.921 18.606 22.877 21.124 4.816 1.524 11.142 1.398 15.793-.313 6.85-2.521 11.294-7.034 13.593-13.8.56-1.65.629-2.314.624-6.085-.005-4.023-.048-4.364-.85-6.879-.952-2.979-2.09-5.461-3.973-8.664-5.44-9.254-3.74-18.027 4.237-21.873 2.337-1.127 2.73-1.236 5.685-1.588 2.328-.276 6.23.333 8.705 1.36 4.63 1.92 8.912 6.114 15.065 14.757a1030.66 1030.66 0 003.215 4.498c1.611 2.23 1.755 2.614 1.41 3.766-.248.828-.382.975-.67.736-.198-.165-1.617-2.108-3.154-4.319-5.352-7.697-6.637-9.331-9.935-12.633-2.612-2.614-3.729-3.533-5.24-4.315-1.056-.546-2.128-1.036-2.381-1.09-.253-.053-1.235-.3-2.18-.547-1.287-.337-2.32-.413-4.102-.302-4.52.28-8.097 2.214-10.369 5.608-2.153 3.216-1.803 8.97.839 13.77 2.837 5.153 4.072 7.882 4.917 10.859.812 2.865.895 3.478.902 6.724.011 5.094-.991 8.621-3.617 12.726-2.181 3.41-6.76 7.098-10.843 8.733-3.919 1.57-9.83 2.363-13.613 1.828zm-30.928-2.731c-1.023-.464-2.31-1.112-2.86-1.44s-1.058-.595-1.13-.595c-.265 0-4.81-2.814-6.983-4.325-7.322-5.09-15-13.452-19.403-21.13-.694-1.21-.7-1.252-.198-1.52.284-.153 1.507-.275 2.717-.272 1.884.004 2.509.132 4.35.89 1.181.487 2.73 1.275 3.439 1.75 1.965 1.319 5.505 4.898 7.326 7.41a582.38 582.38 0 002.825 3.859c.656.886 1.67 2.296 2.252 3.135 2.414 3.478 6.658 9.127 8.062 10.733 2.4 2.745 2.393 2.772-.397 1.505zm31.493-2.206c-8.66-1.34-15.043-6.42-23.721-18.88-6.173-8.862-7.56-10.67-10.834-14.121-3.944-4.157-6.74-6.308-11.035-8.49-5.732-2.913-11.748-4.028-17.411-3.229-1.617.228-3.577.657-4.356.953-1.522.579-1.701.528-1.969-.557-.22-.895-.021-1 3.682-1.935 2.708-.683 3.133-.719 7.011-.59 3.318.112 4.622.273 6.642.825 10.512 2.87 17.706 8.573 26.234 20.795 3.882 5.563 4.257 6.088 6.408 8.977 5.868 7.878 9.663 11.12 15.596 13.324 2.075.77 2.348.805 6.53.827 4.1.022 4.488-.02 6.35-.687 3.205-1.146 4.794-2.165 7.048-4.515 3.462-3.612 4.482-6.446 4.257-11.84-.182-4.386-.882-6.39-4.41-12.611-2.868-5.06-4.054-10.035-3.457-14.51.89-6.667 5.087-11.976 11.39-14.407 6.76-2.608 13.593-2.01 20.188 1.766 2.869 1.643 8.366 7.119 11.761 11.715 5.258 7.119 5.402 7.354 5.21 8.495-.171 1.01-.669 1.658-.851 1.11-.051-.153-.535-.881-1.074-1.619-.54-.737-1.696-2.38-2.569-3.652-8.649-12.598-15.604-17.468-24.87-17.413-5.054.03-9.107 1.66-12.616 5.073-5.465 5.316-6.249 12.984-2.135 20.904 3.518 6.773 4.296 8.505 4.945 11.01 2.668 10.283-2.944 19.852-13.31 22.692-1.978.542-6.808.872-8.634.59zm30.584-1.028c.059-.14.795-1.625 1.635-3.299 2.382-4.745 3.08-7.816 3.093-13.594.008-3.58-.092-4.653-.676-7.255-1.052-4.694-2.532-8.41-5.057-12.702-3.07-5.216-3.093-7.725-.083-9.02 3.267-1.405 6.871-.09 10.588 3.865 2.972 3.161 4.037 4.54 8.211 10.63 2.655 3.873 3.82 5.514 4.793 6.745 1.138 1.442 1.237 1.953.545 2.809l-.475.586-.932-1.152c-.513-.634-1.751-2.343-2.752-3.798-6.414-9.327-8.174-11.657-10.95-14.506-2.718-2.79-4.293-3.71-6.388-3.734-1.921-.022-2.9.578-2.897 1.775.003.966.925 3.091 2.065 4.76 2.095 3.063 4.461 9.222 5.514 14.35.712 3.47.652 10.473-.117 13.758-1.096 4.677-2.501 7.745-3.95 8.623-.55.333-1.287.787-1.637 1.01-.35.222-.589.289-.53.148zM69.15 121.59c-2.5-.71-3.7-1.296-6.132-2.996-3.866-2.702-7.34-6.822-14.227-16.872-6.487-9.466-12.369-15.604-18.006-18.789-.727-.41-1.501-.89-1.72-1.065-.218-.175-1.17-.646-2.116-1.048a582.65 582.65 0 01-2.778-1.187c-.582-.252-2.368-.86-3.97-1.352l-2.91-.895-5.556.017c-5.246.015-5.685.056-7.875.724-3.082.942-3.156.935-3.055-.283l.082-.993 1.852-.467c5.797-1.465 10.253-1.635 15.344-.586 3.952.814 6.713 1.797 10.79 3.84 7.633 3.826 13.824 9.736 20.781 19.836.752 1.09 1.862 2.698 2.467 3.571 6.827 9.852 11.38 14.4 16.285 16.261 1.822.692 3.423.915 6.307.88 1.938-.024 2.737-.167 4.233-.759 3.34-1.32 5.516-3.241 6.878-6.074.7-1.456.756-1.798.731-4.486-.023-2.542-.127-3.179-.816-5.027-.434-1.165-1.522-3.406-2.417-4.98-3.827-6.731-4.998-11.024-4.704-17.25.13-2.728.295-3.684.997-5.735.463-1.354 1.323-3.296 1.912-4.314 1.234-2.136 4.686-5.822 6.805-7.268 5.01-3.42 11.71-5.013 17.918-4.263 9.948 1.202 17.326 6.55 26.074 18.9 1.4 1.976 1.514 2.244 1.375 3.214-.19 1.324-.517 1.676-.898.964-.447-.835-4.681-6.597-6.056-8.24-3.655-4.369-7.614-7.909-10.897-9.745-8.17-4.567-18.62-4.305-26.095.655-2.364 1.568-3.818 2.972-5.441 5.253-5.185 7.284-5.154 16.48.085 25.665 1.973 3.46 2.869 5.339 3.404 7.139.766 2.574.841 3.064.831 5.454-.025 5.824-3.612 10.272-9.906 12.28-2.774.886-6.5.894-9.577.021zm40.707-1.677c1.174-4.2 1.347-5.56 1.354-10.65.006-4.422-.08-5.555-.602-7.937-.94-4.291-2.399-8.428-4.184-11.868-.787-1.517-.686-2.21.346-2.366.844-.126 3.367 3.026 9.61 12.003 2.219 3.191 4.497 6.357 5.062 7.035l1.028 1.231-.972 1.282c-.534.705-1.043 1.342-1.13 1.414-.089.073-.993 1.133-2.01 2.355-1.765 2.121-7.932 7.964-8.406 7.964-.124 0-.167-.208-.096-.463zm-37.003-2.62c-3.37-.497-6.417-2.003-9.107-4.502-2.83-2.629-6.165-6.977-13.564-17.682-2.765-4-8.233-9.961-11.813-12.88-4.861-3.96-11.094-7.138-17.528-8.934-2.541-.71-4.777-.94-9.106-.94-4.192 0-6.288.22-8.794.92-2.672.747-2.764.731-2.665-.449.07-.846.193-1.01.876-1.175.436-.106 1.627-.4 2.646-.654 1.342-.335 3.283-.492 7.05-.568 4.79-.097 5.453-.052 8.466.573 10.466 2.174 19.498 7.599 27.19 16.332 2.64 2.997 4.271 5.118 7.505 9.76 1.47 2.11 3.215 4.614 3.88 5.565 4.085 5.852 8.176 10.025 11.296 11.525 1.97.947 2.18.99 4.849 1.002 2.522.011 2.92-.056 4.152-.697 1.81-.942 2.911-2.319 3.282-4.102.558-2.688-.15-5.182-2.691-9.484-4.474-7.575-6.08-15-4.89-22.595 1.412-8.997 8.019-17.148 16.96-20.922 4.939-2.086 10.434-2.916 15.64-2.363 9.567 1.016 17.21 5.494 24.843 14.554 3.746 4.447 3.869 4.691 3.335 6.61-.168.601-.375.4-2.47-2.404-4.495-6.014-10.303-11.233-15.284-13.733-8.933-4.486-19.189-4.364-27.785.328-4.95 2.702-10.033 8.274-11.79 12.927-1.328 3.513-1.778 5.877-1.807 9.502-.03 3.823.325 5.986 1.607 9.79.746 2.211 2.758 6.44 4.217 8.863 3.872 6.432 2.795 12.451-2.677 14.96-1.59.728-4.175 1.117-5.821.874zm-1.802-5.5c-1.968-.809-3.378-1.917-5.762-4.53-2.322-2.547-3.808-4.527-8.918-11.89-8.57-12.35-15.683-18.994-25.122-23.465-7.714-3.654-15.225-5.1-23.079-4.44-1.969.165-4.519.529-5.666.807-1.148.28-2.197.507-2.331.507-.135 0-.208-.442-.162-.982.08-.972.1-.987 1.67-1.324 4.91-1.055 5.608-1.133 10.143-1.131 4.15.002 5.087.089 8.377.78 9.242 1.942 17.173 5.993 24.776 12.654 1.84 1.612 3.388 3.045 3.44 3.184.052.14.69.905 1.417 1.701 2.947 3.224 4.918 5.806 9.245 12.106 7.907 11.515 11.339 14.782 15.23 14.501 1.882-.136 2.38-.506 2.38-1.767 0-.935-1.268-4-1.983-4.796-.528-.586-2.91-5.445-3.568-7.276-.314-.873-.944-2.956-1.4-4.63-.815-2.986-.83-3.153-.835-8.996-.004-5.912.001-5.972.826-8.73.456-1.529 1.148-3.49 1.537-4.36.737-1.648 2.67-5.078 3.158-5.6.155-.167.817-.989 1.472-1.826 2.631-3.365 7.793-7.18 12.435-9.193 5.664-2.456 10.265-3.298 16.404-3.004 4.106.197 4.926.307 7.408.99 8.457 2.324 14.842 6.31 21.052 13.144 2.09 2.3 2.232 2.529 2.232 3.623 0 .642-.102 1.23-.226 1.306-.124.077-.868-.66-1.653-1.638-6.474-8.055-15.022-13.316-24.458-15.05-3.086-.568-9.474-.635-11.763-.125-.8.178-1.856.388-2.344.466-1.217.193-5.409 1.713-7.181 2.603-5.86 2.942-11.334 8.296-14.106 13.795-3.966 7.869-4.059 17.795-.258 27.622.75 1.94.987 2.404 2.835 5.55 1.706 2.905 2.518 4.907 2.525 6.224.016 3.189-3.866 4.788-7.748 3.192zm-2.206-7.887c-.975-1.061-4.004-4.886-4.844-6.117-7.42-10.866-10.373-14.7-14.602-18.955A58.347 58.347 0 0030.918 66.33c-3.04-1.288-4.807-1.862-8.864-2.88l-3.44-.863-7.01.015c-6.22.014-7.251.077-9.129.566-1.164.303-2.192.47-2.284.37-.224-.24.688-7.744 1.181-9.728.214-.86.464-1.996.554-2.524.406-2.372 2.67-8.571 4.715-12.913l.802-1.702.824.923c5.403 6.061 7.826 8.295 11.808 10.883 4.272 2.777 9.775 5.075 14.812 6.184 1.828.403 3.361.495 8.202.495 5.288 0 6.234-.067 8.466-.603 12.192-2.93 22.108-11.123 26.342-21.77 2.422-6.09 3.05-13.944 1.66-20.754l-.62-3.043c-.17-.834-1.46-4.462-2.233-6.277-.444-1.043-.807-1.94-.807-1.996 0-.192 3.34.316 6.35.966 16.344 3.532 31.278 13.557 41.004 27.527 6.099 8.76 10.575 20.605 11.5 30.433l.173 1.839-1.534-1.445c-7.769-7.315-15.251-11.148-24.553-12.578-8.062-1.239-15.555-.127-22.824 3.387-7.339 3.548-13.336 9.36-16.812 16.295-4.974 9.923-4.627 23.122.901 34.293.713 1.44 1.296 2.652 1.296 2.693 0 .226-.883.906-1.176.906-.19 0-.809-.506-1.377-1.124zm15.586-54.552c5.11-2.747 12.037-4.366 18.717-4.377 4.269-.007 10.355 1.008 13.698 2.283.622.237 1.19.371 1.265.297.343-.343.637-3.436.484-5.101-.79-8.596-6.902-15.624-15.101-17.363-9.076-1.925-18.085 2.837-21.588 11.41-1.539 3.764-1.793 7.328-.824 11.559.465 2.033.628 2.464.93 2.464.132 0 1.22-.528 2.42-1.172zm-44.254 3.013c-2.893-.242-6.65-.965-8.334-1.604-.728-.276-1.468-.502-1.645-.502-.713 0-6.725-3.08-9.203-4.715-1.912-1.26-3.711-2.813-6.483-5.593-2.11-2.117-4.179-4.353-4.597-4.969-.692-1.019-.731-1.193-.431-1.917.181-.439.47-.798.64-.798.171 0 .78.625 1.354 1.39 1.76 2.342 7.008 7.557 9.383 9.322 5.503 4.091 12.076 6.647 18.697 7.272 10.3.971 19.642-2.203 26.774-9.1 4.17-4.032 6.539-8.056 8.145-13.84.665-2.391.719-2.96.721-7.612.003-4.54-.065-5.31-.7-7.952-.834-3.463-1.667-5.754-3.255-8.95C70.6 1.505 70.075.404 70.075.351c0-.053.485-.097 1.077-.097h1.077l1.437 3.047c.79 1.675 1.437 3.208 1.437 3.407s.187.81.416 1.357c.229.548.725 2.378 1.102 4.067.948 4.243 1.005 10.253.135 14.184-1.174 5.304-3.243 9.57-6.61 13.626-3.103 3.741-8.123 7.55-12.373 9.392-5.497 2.381-11.996 3.501-17.595 3.033zm-1.439-4.93c-10.208-1.715-17.209-6.175-25.367-16.163-1.523-1.864-1.533-1.89-1.094-2.56.245-.373.58-.678.747-.678.167 0 .955.863 1.75 1.918 2.123 2.813 7.76 8.335 10.143 9.936 4.01 2.694 8.68 4.665 12.698 5.358 2.909.502 10.187.192 12.484-.53 3.297-1.039 4.714-1.639 7.408-3.138 2.171-1.209 3.171-1.998 5.574-4.4 2.354-2.353 3.182-3.393 4.224-5.307 2.627-4.824 3.607-9.738 3.062-15.346-.435-4.472-2.117-9.35-4.793-13.895C64.284.438 64.27.393 64.846.18c1.36-.503 1.678-.163 3.792 4.045 1.536 3.06 2.165 4.712 2.92 7.671 1.387 5.43 1.376 9.565-.037 14.817-2.665 9.907-11.055 17.608-21.95 20.152-2.343.547-8.914.894-10.832.572zm.116-5.095c-4.962-.85-10.073-3.1-13.891-6.115-2.11-1.667-5.937-5.66-8.157-8.512-1.477-1.898-1.747-2.393-1.53-2.8.71-1.323.915-1.218 3.096 1.586 5.348 6.879 10.95 11.114 17.307 13.09 1.964.61 2.818.712 6.747.807 4.388.107 4.559.09 7.011-.672 4.465-1.388 7.652-3.248 10.36-6.044 4.194-4.33 6.097-9.809 5.636-16.226-.294-4.105-1.786-8.187-5.268-14.415-1.247-2.23-1.228-2.51.17-2.517.617-.004.86.268 1.822 2.046 3.028 5.592 3.752 7.28 4.646 10.831 2.246 8.922-.644 17.772-7.735 23.69-2.038 1.7-6.748 3.977-9.763 4.72-2.563.63-8.202.917-10.451.531zm1.21-4.819c-3.353-.43-7.25-1.95-10.603-4.137-2.626-1.712-7.227-6.5-10.493-10.915-.672-.909-.678-.95-.216-1.521.262-.323.635-.58.83-.57.195.009 1.366 1.325 2.603 2.926 3.923 5.075 8.092 8.739 11.774 10.347 3.766 1.644 5.02 1.905 9.01 1.871 3.274-.027 3.966-.115 5.82-.737 3.072-1.03 4.868-2.081 6.852-4.007 2.066-2.006 3.03-3.445 4.04-6.024.679-1.731.736-2.16.728-5.451-.008-3.317-.07-3.752-.864-6.1-.471-1.39-1.581-3.83-2.468-5.424-2.441-4.387-3.204-5.984-2.964-6.202.12-.109.541-.273.935-.366.67-.158.774-.052 1.63 1.654a110.92 110.92 0 002.09 3.904c2.827 5.01 3.765 8.184 3.742 12.666-.014 2.705-.12 3.489-.721 5.292-.93 2.79-1.943 4.497-3.942 6.634-3.352 3.582-7.378 5.555-12.636 6.192-2.491.301-2.561.3-5.148-.031zm.51-4.877c-4.193-.98-6.012-1.75-8.731-3.687-1.665-1.187-5.113-4.627-6.892-6.876-.575-.728-1.111-1.383-1.192-1.455-.08-.073-.555-.71-1.055-1.415l-.91-1.282 1.499-1.289 2.056 2.72c2.614 3.458 7.3 8.025 9.404 9.167 3.04 1.649 4.408 1.982 8.202 2 3.023.014 3.596-.056 4.73-.577.71-.326 1.402-.593 1.54-.593.136 0 .686-.32 1.222-.711 1.9-1.387 3.28-2.881 4.106-4.448.814-1.543.837-1.681.825-4.895-.013-3.088-.07-3.448-.86-5.424-.466-1.164-1.267-2.831-1.78-3.704-1.101-1.876-3.565-6.877-3.565-7.238 0-.313 1.563-.878 1.882-.681.13.08.235.295.235.479 0 .4 1.902 4.23 3.565 7.175 2.398 4.248 3.362 9.374 2.395 12.726-1.72 5.956-6.933 9.795-13.633 10.04-1.383.05-2.752.036-3.043-.032zm-.662-5.29c-.8-.21-2.348-.823-3.44-1.364-2.405-1.192-5.97-4.624-8.979-8.645l-1.96-2.62.604-.49c.82-.663 1.15-.616 1.66.24.238.4.65.966.916 1.257.266.292 1.176 1.386 2.022 2.432 2.342 2.893 4.985 5.25 7.13 6.357 1.898.98 1.943.989 5.11.994 3.099.005 3.235-.019 4.498-.796.748-.46 1.681-1.362 2.192-2.117.886-1.31.888-1.323.76-3.829-.144-2.79-.318-3.259-2.899-7.805-.826-1.455-1.877-3.531-2.336-4.614-.79-1.865-.81-1.986-.36-2.315.724-.529 1.462-.424 1.634.233.191.733 2.69 5.67 3.906 7.718 3.17 5.34 2.873 10.913-.73 13.633-2.69 2.03-6.196 2.655-9.728 1.731zm1.583-4.608c-2.394-.603-3.573-1.371-6.227-4.057-2.954-2.99-5.906-6.74-5.52-7.014 2.732-1.944 10.566-6.13 11.472-6.13.358 0 .704.54 1.316 2.05.456 1.128 1.443 3.122 2.192 4.432 3.097 5.416 3.625 7.188 2.62 8.786-.982 1.559-3.732 2.467-5.853 1.933z"
        }
      ></path>
    </svg>
  );
}

export default LogoOmniSvgIcon;
/* prettier-ignore-end */
