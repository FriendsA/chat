# 使用 Node.js 镜像作为基础镜像
FROM node:18 AS nodeapp

# 将当前目录的文件复制到容器中的 app 目录中
COPY . /app

# 设置工作目录
WORKDIR /app

# 安装 Node.js 应用程序所需的依赖项
RUN npm install

# 将 Nginx 镜像作为第二个镜像
FROM userxy2015/ngnix

# 复制 Nginx 配置文件到容器中
COPY nginx.conf /etc/nginx/nginx.conf

# 从第一个镜像中复制 Node.js 应用程序到 Nginx 的默认网站目录中
COPY --from=nodeapp /app /usr/share/nginx/html

# 暴露 Nginx 的 HTTP 端口
EXPOSE 80